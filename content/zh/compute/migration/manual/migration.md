---
title: "跨区域迁移操作"
description: 如何进行跨区域迁移
draft: false
keyword: 云计算, 跨区域迁移
---

迁移流程请参考[跨区域迁移方案](../../intro/migration/)。

## 网络迁移

### 申请新的公网 IP

新区创建新的公网IP及选择相应带宽。

>**说明**
>
>如果涉及一级域名的备案，需要变更解析地址，请提前提交备案变更申请，具体参见备案变更文档。

### 抗D迁移

在新可用区创建或修改抗D服务。

### CDN迁移

在新可用区创建或修改CDN服务。

## 镜像迁移

利用跨区复制功能将镜像迁移到新区。

将已有的自有镜像利用跨区复制到新区。


## 资源迁移

### 手动创建资源

1. 基于老区的资源，在新区手动创建资源包括：VPC、私有网络、云服务器、硬盘、数据库、缓存等，例如：老区的云服务器都为性能型2C4G，硬盘是100G性能盘，新区云服务器可以选择基础型或者计算型云服务器，配置也是2C4G，硬盘为基础型或者计算型硬盘（注意：云服务器为基础型，硬盘也需要是基础型，云服务器为计算型，硬盘也必须是计算型），容量为100G。

   > **说明**
   >
   > 如果新区没有老区对应型号的机型，如老区有2C6G的性能型 / 超高性能云服务器，但新区没有对应型号，建议可以创建2C8G基础型 / 计算型云服务器。

2. 将硬盘挂载到相应的云服务器上。

3. 将新区的**云服务器关机**。

4. 将资源对应关系通过工单告知云平台，需要将老区和新区的资源一一对应，工单标题：[老区迁移]，工单里内容示例：

   例如：

   ![](/compute/migration/_images/migration_1.png)

   通过管理控制台在新区查看迁移过来的资源，并验证数据完整性。

   > **注意**
   >
   > 通过该方法，请勿操作新老区的相关资源，且新区的硬盘保持【可用】状态（即不挂载）。

   

### 自动创建资源

利用云平台提供的“资源编排”功能梳理旧可用区的网络拓扑，为下一步迁移做准备，具体操作如下：

1. 创建模板。

   ![](/compute/migration/_images/migration_2.png)

2. 选择**从当前资源抽取模板**。

   ![](/compute/migration/_images/migration_3.png)

3. 查看生成的网络拓扑（在新旧区均可查看该网络拓扑）。

   ![](/compute/migration/_images/migration_4.png)

4. 基于模板在新区一键创建新的资源。

   ![](/compute/migration/_images/migration_5.png)

5. 将新区的**主机关机**；

6. 发工单给云平台，告知拓扑ID，如下图中的ID：tp-65v3jzve，工单标题：**[老区迁移]**

   工单里内容示例：

   “请协助将北京2区的资源迁移到北京3区C，资源已经基于资源编排工具创建了，并且所有资源都已经关机，请将北京2区的资源迁移到北京3区C，拓扑ID：tp-65v3jzve。 ”


7. 通过云平台控制台在新区查看迁移过来的资源，并验证数据完整性。

> **说明**
>
> 如果云主机在基础网络，内网IP会变更。
>
> 对比新主机和旧主机的配置，hostname会变为新的主机 ID、udev和fstab需重新配置。
>
> 如果新区没有老区对应型号的机型，如老区有2C6G的性能型 / 超高性能主机，但新区没有对应型号，系统会自动创建2C8G基础型 / 企业型主机，也就是会创建跟该机型接近配置的主机。

通过该方法，请勿操作新老区的相关资源，且新区的硬盘保持【可用】状态（即不挂载）。