---
title: "步骤一：创建云服务器"
description: 本章节介绍如何创建云服务器
draft: false
weight: 10
keyword: 云计算, 云服务器，创建云服务器
---

本章节介绍如何快速创建云服务器。


## 步骤一：进入创建页面

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器**页面。

   ![](/compute/vm/quickstart/_images/create_vm_1.png)

3. 点击**创建**，进入**创建云服务器**页面。

   ![](/compute/vm/quickstart/_images/create_vm_2.png)


## 步骤二：选择镜像

   ![](/compute/vm/quickstart/_images/create_vm_2.png)

   参数说明，如下表所示。

   | <span style="display:inline-block;width:100px">镜像类型</span> | 说明  | 
   |--------  | -------------------------|
   | 常用镜像                       | 用户常用镜像。 |
   | 系统镜像                        | 系统基础镜像，仅包括初始系统环境。用户需要根据实际情况进行环境和软件配置安装。 |
   | 自有镜像                         | 将已有云服务器制作新映像后生成，包括初始系统环境、 应用环境和相关软件配置 。可在云服务列表中选中目标云服务器ID右键选择制作成新镜像功能创建。 |
   | 共享镜像                        | 是其他账号的自定义映像主动共享给用户使用的映像。使用共享镜像需要用户自行承担风险。 |

## 步骤三：配置“云服务器设置”

   ![](/compute/vm/quickstart/_images/create_vm_3.png)

   参数说明，如下表所示。

   | 参数类型   | 说明                                                         |
   | ---------- | ------------------------------------------------------------ |
   | 云服务器类型     | 分为性能型和超高性能型。               |
   | CPU    | 根据实际情况进行选择。            |
   | 内存     | 根据实际情况进行选择。     |
   | 系统盘    |  系统盘规格为20-100GB. |

## 步骤四：网络设置

   ![](/compute/vm/quickstart/_images/create_vm_4.png)

   参数说明，如下表所示。

   | <span style="display:inline-block;width:100px">网络类型</span> | 说明                                                         |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | 基础网络                                                     | 由云平台统一管理和规划，自动分配内网IP，同一账号同一**可用区**内互通，更适合对网络易用性要求比较高的用户。 |
   | VPC私有网络                                                  | <li >VPC是用户在 云平台 公有云上构建出的一个专属隔离的网络环境。在 VPC 网络内，用户可以自定义 IP 地址范围，创建子网，用户也可以通过管理路由器自定义端口转发、隧道服务( GRE 隧道 、IPSec 隧道 )、VPN 服务等管理服务。根据VPC公网流量转发能力不同，VPC分为免费（仅具有内网通信功能）、小型（100kpps)、中型（150kpps)、大型（200kpps)、超大型（250kpps)，用户可根据自己的需求选择。</li > <li >私有网络指的是VPC下的二层子网网段，通常是一个 C 段地址，云服务器/数据库等资源需要加入到私有网络中管理。</li > |


## 步骤五：基本信息设置

   ![](/compute/vm/quickstart/_images/create_vm_5.png)

   参数说明，如下表所示。

   | <span style="display:inline-block;width:100px">参数类型</span> | 说明                                    |
   | -----------------------------------| ------------------------------------------------------------ |
   | 云服务器名称                          | 创建多台云服务器时，设置有序的云服务器名称和主机名称便于从名称了解云服务器的信息。 |
   | 云服务器数量                          | 根据实际情况进行配置。   |
   | 登录方式                          | 设置密码或SSH密钥两种方式登录。 <br /> <li >SSH密钥 ：新建一个密钥对，并下载私钥，私钥用于远程登录身份认证，为保证云服务器安全， 云平台 不会保存用户的私钥。如何使用私钥登录云服务器请参考[密钥文档](/compute/ssh/manual/ssh/)。 </li >  <li >密码：自主设定密码。   </li >  |

## 步骤六：立即创建
   完成以上配置后，点击 **创建** 即可创建云服务器。
     
