---
title: "什么是同步灾备"
date: 2021-05-21T00:38:25+09:00
description: 本小节主要介绍同步灾备。
draft: false
weight: 1
---
## 基本原理

以stretchcluster的实现方式来提供同步灾备。通过集群在物理上的拉伸，由一个站点变成两个站点进行部署，即主备站点的节点仍然同属于一个集群。当一个数据中心发生故障时，业务可自主切换至另一个数据中心以保证业务的连续性，从而解决传统灾备系统无法承载业务和业务无法自动切换的问题。为用户提供一套资源利用率高、高可靠以及业务连续的存储系统。

## 特点及优势

- 借用NeonSAN自身的多副本机制与拉伸集群的架构，将不同的数据副本按照一定策略，分别放置在主备站点，副本之间的数据强一致，保证RPO=0

- 具备良好的灵活性，用户可根据实际应用场景将非拉伸集群升级至拉伸集群，以保证数据的同步备份。

- 具有良好的弹性扩展能力，每个存储集群可配置多个节点，用户可根据需求实现单节点为单位的平滑扩容。

- 远端实时同步数据备份，其中一端数据中心业务中断后，另一端可持续提供业务，保证用户业务的连续性。

- 本地数据中心设备发生故障时，业务会自主切换，避免手动切换业务造成业务中断时间过长。

- 两个数据中心可同时提供业务，提高资源利用率。
