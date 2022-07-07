---
title: "修改配置参数"
description: 本小节主要介绍如何修改 MongoDB Cluster 配置参数。 
keyword: MongoDB Cluster 修改账号；
weight: 15
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持修改 MongoDB Cluster 集群的配置参数。

> **注意**
> 
> 各参数的值设置需根据云服务器、存储磁盘配置情况，以及数据库其他参数情况进行调整。

本小节主要介绍如何修改 MongoDB Cluster 集群的配置参数。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MongoDB Cluster 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB Cluster**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 点击**配置参数**页签，进入集群配置参数管理页面。
5. 选择参数类型，切换到相应节点参数页面。
   
   可选择参数类型：**公共参数**、**Sharding Node**、**Config Server Node**、**Mongos Node**
   
6. 点击**修改属性**，公共参数**值**进入可编辑状态。
   
   ![修改配置参数](../../../_images/modify_para.png)

7. 参考配置参数取值范围和描述，修改参数值。
8. 确认参数信息无误后，点击**保存**，返回参数列表页面。
 
> **说明**
> 
> 当配置参数值发生变化时，将会重启对应的 MongoDB Cluster 服务。