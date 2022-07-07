---
title: "新增节点"
description: 本小节主要介绍如何新增 PostgreSQL 节点实例。 
keyword: 节点添加,新增节点,PostgreSQL,关系型数据库,数据库
weight: 10
collapsible: false
draft: false
---


本小节主要介绍如何新增 PostgreSQL 集群节点。

## 约束限制

- `基础版`集群不支持新增节点。
- `只读实例`节点最多可创建 5 个，且不支持配置新`只读实例`节点配置。
- `Proxy 实例`节点最多可创建 2 个。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 PostgreSQL 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 PostgreSQL**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**节点**页签，点击**新增节点**，弹出新增节点配置窗口。
   
   <img src="../../../_images/add_node.png" alt="新增节点" style="zoom:50%;" />

5. 配置节点信息，详细参数请参见[节点参数](#节点参数)。

6. 确认配置信息无误后，点击**提交**，返回节点列表页面。

   ![查看节点信息](../../../_images/get_id_node3.png)

### 节点参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| 节点类型   | 选择节点类型。可选择`只读实例`、`Proxy 实例`。 |
| CPU   | 选择节点云服务器 CPU 规格。 |
|   内存     |  选择集群节点云服务器内存规格。  |
|   磁盘大小 |  配置集群数据和日志存储磁盘大小。磁盘大小决定了数据库最大容量以及 IOPS 能力，请根据业务量，可滑动设置或输入数字配置集群磁盘大小。<li>最小可配置为 20GB。| 
|   节点类型  |  选择集群节点云服务器类型。可选择`基础型`和`企业型  e2`。<li>不同类型可选 CPU 和内存不同。   |
|   节点数量     |  选择节点数量。 <li>`只读实例`默认为0，最多可选择5个。  <li>`Proxy 实例`默认为0，最多可选择2个。|
| 节点名称 |  输入节点名称。 |
| 节点 IP   |  配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动配置`需为各节点配置 IP。  |