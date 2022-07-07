---
title: "创建 QKE 集群 "
description: 介绍如何创建 QKE 集群
draft: false
enableToc: false
weight: 10
keyword: 云平台, 云计算, 创建, QKE 集群, 节点配置
---

本小节介绍如何快速创建 QKE 集群。

## 准备工作

为保证 QKE 集群成功创建，您需要做如下准备：

- 创建 VPC 网络，用于部署 QKE 集群。具体操作，请参见[创建 VPC 网络](/network/vpc/manual/vpcnet/10_create_vpc/) 。

  > **注意**
  >
  > 在 QKE 服务环境参数设置中，**Docker 网桥地址**默认为`172.30.0.0/16`，故建议创建 VPC 网络时，不要 VPC 地址范围设置为该网断。若必须设置为该网断，则需要在参数设置中修改Docker 默认网段为其他网断地址，避免引起冲突。 

- 通过 API 密钥管理页面创建 API 密钥。存储、网络等插件通过 API 密钥与云平台交互并创建资源。

- 请检查硬盘配额。需确保至少 230 GB、14 块硬盘的配额。硬盘的默认类型与 QKE 集群云服务器类型一致。

  >**说明**
  >
  >可通过管理控制台的**资源** > **我的配额**查看配额详情。
  >
  >若配额不足，请提交工单申请提升配额。

- 请检查负载均衡器及安全组配额。

  - 当要创建高可用的集群（三个主节点）时，需要 1 个负载均衡器配额，1 个安全组配额。

  - 当要通过 EIP 暴露 KubeSphere Console 时，需要 1 个额外的负载均衡器配额，1 个额外的安全组配额。
  - 当以上两者都满足时，共需要 2 个负载均衡器配额，2 个安全组配额。

## 操作步骤

1. 登录管理控制台。
2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**。
   - 如果是首次部署，进入 QKE 应用简介页面，点击**立即部署**进入部署页面。
   - 如果已创建过 QKE 集群，则进入 QKE 集群管理页面，点击**创建**进入部署页面。

### 基本设置

1. 在顶部**区域**下拉框中，选择部署区域。

   > **说明**
   >
   > 建议尽量选择靠近您客户的区域，以减少网络延时。

   2. 填写集群基本信息，包括：名称、描述、版本、配置类型、计费方式和可用区。

      ![](../../_images/create-basic-settings.png)

      系统预置了如下资源配置类型：

      - **基础型开发环境**：为全部节点选择了基础型云服务器及相应类型存储，工作节点标记为 worker=node_perf。
      - **企业型测试环境**：为全部节点选择了企业型云服务器及相应类型存储，工作节点标记为 worker=node_super_perf。
      - **基础型生产环境**：为全部节点选择了基础型云服务器及相应类型存储，工作节点标记为 worker=node_perf。
      - **企业型生产环境**：为全部节点选择了企业型云服务器及相应类型存储，工作节点标记为 worker=node_super_perf。

      可以通过选择以上预置类型快速创建集群，也可根据自身需求选择**自定义**方式配置节点。

      > **说明**
      >
      > 您可以通过**费用预览**区查看到您当前所选择的配置类型所对应的资源规格。

### 节点设置（可选）

当您选择自定义配置资源类型时，才需要进行节点设置。节点设置包括主节点、工作节点及客户端节点的设置。

#### **主节点设置**

主节点是 KubeSphere 集群的管理者。目前支持创建 1 个或 3 个主节点。

![](../../_images/create-master-settings.png)

#### 工作节点设置

工作节点是 Kubernetes 集群中承担工作负载的节点，承担实际的 Pod 调度以及与管理节点的通信等。

> **注意**
>
> 需要创建至少 2 个与主节点云服务器类型一致的工作节点，其他类型的节点可按需创建。
>
> 例如：主节点的**资源类型**选择`基础型`，则基础型节点的**数量**必须大于等于2，企业型节点及客户端节点的数量可根据您的需求设置。

![](../../_images/create-worker-settings.png)

#### **客户端节点设置**

客户端节点提供了 VNC 窗口进行登录，可通过客户端节点登录到集群中其他节点。

![](../../_images/create-client-settings.png)

### 网络设置

![](../../_images/create-network-settings.png)

1. 选择 QKE 集群部署的 VPC 网络及私有网络。

   不同的 QKE 集群可以重复使用相同的 VPC 网络和私有网络，也可以使用不同的 VPC 网络和私有网络。若您已经创建有 VPC 网络和私有网络，可重复使用，不需要多次创建。

   若您没有可用的 VPC 网络及私有网络，请根据界面提示，点击**新建 VPC 网络**进行创建。VPC 创建的具体操作请参见[创建 VPC 网络](/network/vpc/manual/vpcnet/10_create_vpc/)。

   > **说明**
   >
   > ▪︎ 选择的 VPC 网络与 QKE 集群应在相同的区域。
   >
   > ▪︎ 请勿选择免费型的 VPC，目前暂不支持在免费型 VPC 中创建集群。

2. 设置节点 IP。

   ▪︎ 自动分配：根据私有网络的地址范围自动分配节点 IP 地址。

   ▪︎ 手动指定：手动设置每一个节点的 IP 地址。

### 依赖服务设置

![](../../_images/create-external-service.png)

- **etcd 服务**：Kubernetes 集群使用 etcd 作为后端存储。

  建议使用云平台提供的 [etcd 服务](/middware/etcd/) 单独部署和管理，以获得更好的可用性和容错性。点击**快捷创建**即可创建 etcd 服务集群。etcd 集群和 QKE 集群需部署在同一 VPC 下。

  如果您未单独部署 etcd 服务，系统将使用内置在主节点的 etcd。

- **ELK 服务**：QKE 集群的日志组件使用 [Elasticsearch](https://github.com/elastic/elasticsearch) 作为后端存储。

  建议使用云平台提供的 ELK 服务单独部署和管理，以获得更好的可用性和可维护性。点击**快捷创建**即可创建 ELK 服务集群。ELK 集群和 QKE 集群需部署在同一 VPC 下。

  如果您没您未单独部署 ELK 服务，系统将使用内置的 Elasticsearch。

> **注意**
>
> 内置 etcd 会占用 QKE 主节点的资源并无法增删节点；内置 Elasticsearch 会占用 Kubernetes 集群的资源并依赖 kKubernetes 进行管理，在 Kubernetes 集群发生故障期间 Elasticsearch 可能无法正常工作。故生产环境下，建议您独立部署 [etcd 服务](/middware/etcd/) 及  [ELK 服务](/bigdata/elk/)。




### 服务环境参数设置

根据实际需求，设置集群参数，部分参数在集群创建后不可修改，请提前做好规划。

参数详细说明请参见[配置集群参数](../../manual/qke/paras_cfg/#参数说明)。

### 用户协议

阅读并同意《云平台 AppCenter 用户协议》，然后点击**提交**，开始创建 QKE 集群。

### 创建成功

创建集群一般在 6-12 分钟左右（视选装的组件而定）。

当 QKE 节点的服务状态显示为`正常`状态，表示该节点启动正常。 当每个节点都启动正常后 QKE 集群显示为`活跃`状态，表示您已经可以正常使用 QKE 服务了。


