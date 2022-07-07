---
title: "创建 RocketMQ 集群"
description: 本小节主要介绍如何创建 RocketMQ 集群。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,rocketMQ,创建集群,快速入门
weight: 10
draft: false
---

创建RocketMQ集群前，您需要先创建一个VPC网络。

> **说明**
> 
> 为了保障数据安全，RocketMQ 集群需要运行在受管私有网络中。所以在创建一个 RocketMQ 集群之前，需要创建一个 VPC 和一个受管私有网络，受管私有网络需要加入 VPC，并开启 DHCP 服务（默认开启）。

## 第一步：基本设置

![](../../_images/base_setup.png)

根据实际需求填写**名称**和**描述**，不影响集群的功能，版本一般建议选择最新版本。

**多可用区域**将节点分散部署在不同区，可用性高；**单可用区域**将节点部署在同一个区，网络延迟最低。

> **注意**
> 
> 只有选择部署在『region』为**北京3区**时，才可以选择部署方式。如果您选择『多可用区部署』，则集群所有节点将分散部署在当前region中的所有zone；反之，如果选择『单可用区部署』，则集群所有节点将部署在当前region中的某一个zone 中。


## 第二步：网络设置

![](../../_images/network_setup.png)

出于安全考虑，所有的集群都需要部署在私有网络中，请选择自己创建的网络。

## 第三步：参数设置

![](../../_images/sevice_parameter.png)

按照实际需求配置 RocketMQ 集群的参数。

## 第四步：用户协议

阅读并同意 AppCenter 用户协议之后，点击**提交**，即可开始部署应用。