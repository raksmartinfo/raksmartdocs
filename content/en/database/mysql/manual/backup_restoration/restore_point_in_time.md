---
title: "恢复集群到指定时间"
description: 本小节主要如何恢复 MySQL Plus 集群到指定时间。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,恢复集群到指定时间
weight: 40
collapsible: false
draft: false
---



MySQL Plus 支持从备份恢复集群到指定时间点。

本小节主要介绍如何恢复 MySQL Plus 集群到指定时间。

## 约束限制

- 仅支持在备份区域恢复集群，不支持跨区域恢复集群。
- 仅支持**逻辑备份**的集群提供备份回档功能。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MySQL Plus 集群状态为**活跃**。
- 已创建集群备份。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**备份**页签，点击**备份回档**，弹出回档配置窗口。
   
   -选择回档时间段和设置回档时间点
   
   -选择目标 Bucket 和 API 密钥

   <img src="../../../_images/point_in_time_1.png" alt="备份回档" style="zoom:50%;" />

5. 点击**确认**，跳转到集群恢复页面，配置集群信息。

   根据备份集群信息，需设置**基本设置**、**主实例设置**、**网络设置**、**服务环境参数设置**、**用户协议**。

   <img src="../../../_images/point_in_time_2.png" alt="备份回档" style="zoom:50%;" />

6. 确认回档信息无误后，点击**提交**，返回集群管理列表页面。

   当集群状态为**活跃**时，集群即可正常访问。
