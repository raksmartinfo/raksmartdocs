---
title: "常见问题"
linkTitle: "常见问题"
date: 2020-02-28T10:08:56+09:00
description: hpc常见问题
keyword: 云计算, hpc，常见问题
draft: false
weight: 2
---



## 为什么不能在云服务器页面对HPC集群节点进行操作？


尽管HPC集群是基于云服务器组建，但HPC还提供了额外的部署流程，包括且不限于以下条目：

* HPC帮助用户按照既定节点配比（管控，登录，计算，GPU）和指定实例配置，为各类节点批量开通云服务器。
* HPC在开通各个节点对应的云服务器后，会进一步部署管控系统。
* HPC通过管控系统为用户预装选定的软件及其依赖软件包。
* HPC根据节点类型分别配置作业调度器server和client。

以上操作和相关服务都依赖于HPC集群部署流程。若用户自行使用云服务器管理对各个节点进行干预则很可能导致集群创建失败，节点掉线或调度系统失效。因此我们强烈建议如非排查故障，禁止使用云服务器管理控制台对HPC集群节点进行操作。

如有特殊需要，请在HPC开发维护人员指引下使用云服务器管理控制台对节点进行检查。



## 共享软件都有哪些？

可以在平台的软件中心中查看，分为分子化学、医药科学、大气海洋环境、数学库、编译器等一些常用的软件，平台使用spack软件来管理软件，使用命令行的方式同样可以查看到并且编译



## 怎么安装自己的软件？

可以登录到集群的登录节点，进行软件的安装和编译，安装过程可以指定目录等，软件将被安装到该集群的nas存储挂载点



## 怎么远程连接集群\登录节点？

可以在该集群详情中的节点列表，找到登录节点，点击右侧更多按钮，选择绑定公网IP，可以通过此IP地址进行外部访问，如 ssh admin@[IP]，进行远程连接，如果没有公网IP，可以到网路里面按需创建自己需要的公网IP



## 网络怎么配置？

1. 创建私有网络
2. 创建VPC网络，将私有网络绑定到此VPC网络上，创建集群的时候选择此私有网络

就完成了内部网路配置