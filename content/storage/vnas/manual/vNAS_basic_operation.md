---
title: "vNAS基本操作"
date: 2021-11-22T17:08:56+09:00
description: 本小节主要介绍vNAS基本操作。
draft: false
weight: 1
keyword: 云计算, 青云, QingCloud, 文件存储, Virtual NAS, vNAS
---

QingCloud 为您提供的 vNAS 服务是基于标准的 NFS 和 Samba（CIFS）网络协议实现的数据传输，通过创建一个 vNAS 服务器，您可以在多个云服务器客户端以及不同的操作系统间进行数据共享。同时提供权限组和账号配置功能，便于您对云服务器客户端进行访问控制和管理配置。

> **说明**
>
> 在 vNAS 服务器上加载硬盘，通过创建共享存储目标与其进行绑定，即可将数据开放给云服务器客户端。一块硬盘只能和一个共享存储目标绑定；如果硬盘上存在多个分区，则无法和共享存储目标进行绑定；建议您使用空白硬盘，在 vNAS 服务器上进行数据文件的共享。

## 创建 vNAS 服务器

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择 **产品与服务** > **存储服务** > **文件存储 vNAS**，进入 **文件存储 vNAS** 页面：
   ![](/storage/vnas/_images/basic_operation.png)
   
3. 点击 **创建** 按钮，弹出 **创建 NAS** 页面：

   ![](/storage/vnas/_images/basic_operation_1.png)
   
   参数说明如下：

   | <div style="width: 50pt">参数名称</div> | 说明                                                         |
   | --------------------------------------- | ------------------------------------------------------------ |
   | 名称                                    | vNAS 服务器的名称。                                          |
   | 类型                                    | 支持基础性和企业型。<br>基础型 vNAS 服务使用的云服务器类型为基础型的云服务器，是面向个人或中小团队用户推出的入门型文件存储服务，为客户提供基于标准的 NFS 和 Samba（CIFS）网络协议访问的文件存储服务。基础型 vNAS 服务可以使用基础型硬盘，容量型硬盘和企业级分布式 SAN 硬盘（NeonSAN）。<br>企业型 vNAS 服务使用的云服务器类型为企业型的云服务器，是面向性能要求更高的的企业级客户提供的文件存储服务，可以提供更高的数据处理能力，提供标准的 NFS 和 Samba（CIFS）网络协议访问。企业型 vNAS 服务可以使用 SSD 企业型硬盘，容量型硬盘和企业级分布式 SAN 硬盘（NeonSAN）。 |
   | 配置                                    | 分为小型、中型和大型。小型支持1-2个客户端同时读写。中型支持3-5个客户端同时读写。大型支持6-10个客户端同时读写。 |
   | VPC 网络                                | 可选择已有 VPC 网络，也可参照页面内容点击 **新建 VPC 网络**，创建新的 VPC 网络。 |
   | 私有网络                                | 可选择已有私有网络，也可参照页面内容点击 **新建私有网络**，创建新的私有网络。 |
   | 可用区                                  | 根据实际情况选择可用区。                                     |
   | IP                                      | 可选择自动分配和手动指定。                                   |

   > **说明**
   >
   > 所选私有网络的 DHCP 需处于 **打开** 状态。

4. 创建成功的 vNAS 服务器，显示在文件存储 vNAS 主页面：

   ![](/storage/vnas/_images/basic_operation_2.png)

5. 选择需要操作的 vNAS 服务器，点击 **更多操作**，可进行 **关闭**、**修改**、**绑定标签**、**添加到项目**、**删除** 等操作。

   ![](/storage/vnas/_images/basic_operation_14.png)

## 创建共享存储目标

1. 进入文件存储 vNAS 主页面，点击待选择 vNAS 服务器 ID 处的链接：

   ![](/storage/vnas/_images/basic_operation_3.png)

2. 进入 vNAS 服务器详情页面，点击 **创建**：

   ![](/storage/vnas/_images/basic_operation_4.png)

3. 弹出 **创建共享存储** 对话框，根据需求填写相关参数后，点击 **提交** 按钮：

   ![](/storage/vnas/_images/basic_operation_5.png)
   
   参数说明如下：

   | <div style="width: 50pt">参数名称</div> | 说明                                                         |
   | --------------------------------------- | ------------------------------------------------------------ |
   | 目标类型                                | 支持 NFS 和 Samba。                                          |
   | 共享目录                                | 根据实际情况进行填写。<br>NFS 协议的共享目录需要填写文件目录的名称，统一以”/mnt/“开头，如”/mnt/shared_dir"。<br>Samba 协议的共享目录需要填写目录名称，如"shared_dir"。 |
   | 硬盘                                    | 仅支持有文件系统且类型为 Ext4，XFS，NTFS 的硬盘，不支持存在多个分区的硬盘。建议使用新申请的硬盘。 |
   | 权限组                                  | 可选择已有权限组，也可参照页面内容点击 **创建权限组**，创建新的权限组。 |

4.  创建完成后，点击 **应用修改** ：

    ![](/storage/vnas/_images/basic_operation_6.png)
   
5. 进入 vNAS 服务器详情页面，点击图中所示位置，可对 vNAS 服务器进行 **关闭**、**修改**、**切换私有网络**、**修改内网 IP 地址**、**绑定标签**、**添加到项目**、**删除** 等操作。

   ![](/storage/vnas/_images/basic_operation_15.png)

## 账户

### 创建账户

1. 进入文件存储 vNAS 主页面，点击左侧 **账户**：

   ![](/storage/vnas/_images/basic_operation_7.png)

2. 进入 **账户** 页面，点击 **创建**：

   ![](/storage/vnas/_images/basic_operation_8.png)

3. 弹出 **创建账户** 对话框，根据需求填写相关参数后，点击 **提交** 按钮：

   NFS 类型账户如下：

   ![](/storage/vnas/_images/basic_operation_9.png)

   参数说明如下：

   | <div style="width: 50pt">参数名称</div> | 说明                                                         |
   | --------------------------------------- | ------------------------------------------------------------ |
   | 名称                                    | 账户的名称。                                                 |
   | 类型                                    | 支持 NFS 和 Samba，当前选择为 NFS。                          |
   | IP 地址                                 | 支持云服务器 IP 和网段 IP，0.0.0.0代表所有IP地址。           |
   | 权限组                                  | 可选择已有权限组，也可参照页面内容点击 **创建权限组**，创建新的权限组。 |
   | 读写权限                                | 支持读写和只读两种权限。                                     |
   | 用户权限限制                            | 支持不限制 root用户权限、限制root用户权限和限制所有用户权限。 |
   | 数据同步                                | 支持同步写入内存和硬盘和先写入内存，后写入硬盘两种模式。     |
  
   Samba类型账户如下：

   ![](/storage/vnas/_images/basic_operation_10.png)

   参数说明如下：

   | <div style="width: 50pt">参数名称</div> | 说明                                                         |
   | --------------------------------------- | ------------------------------------------------------------ |
   | 名称                                    | 账户的名称。                                                 |
   | 类型                                    | 支持 NFS 和 Samba，当前选择为 Samba。                        |
   | 用户名                                  | 根据实际情况设置用户名。                                     |
   | 密码                                    | 根据实际情况设置密码。密码至少8位，并包括大小写字母、数字及下划线。 |
   | 权限组                                  | 可选择已有权限组，也可参照页面内容点击 **创建权限组**，创建新的权限组。 |
   | 读写权限                                | 支持读写和只读两种权限。                                     |

### 查看账户详情

1. 点击已创建账户 ID 处的链接，进入该账户详情页面，可查看该账户的基本属性及与该账户绑定的权限组。

   ![](/storage/vnas/_images/basic_operation_16.png)

2. 点击如图所示位置，可对该账户进行 **修改**、**绑定权限组**、**添加到项目**、**删除** 等操作。

   ![](/storage/vnas/_images/basic_operation_18.png)

3. 在账户详情页面，点击 **创建**，可创建权限组。

   ![](/storage/vnas/_images/basic_operation_19.png)

4. 在账户详情页面，点击 **绑定权限组**，可绑定新的权限组。

   ![](/storage/vnas/_images/basic_operation_20.png)

## 权限组

### 创建权限组

1. 进入文件存储 vNAS 主页面，点击左侧 **权限组**：

   ![](/storage/vnas/_images/basic_operation_11.png)

2. 进入  **权限组** 页面，点击 **创建**：

   ![](/storage/vnas/_images/basic_operation_12.png)

3. 弹出 **创建权限组** 对话框，根据需求填写相关参数后，点击 **提交** 按钮：

   ![](/storage/vnas/_images/basic_operation_13.png)

   参数说明如下：

   | <div style="width: 50pt">参数名称</div> | 说明                |
   | --------------------------------------- | ------------------- |
   | 名称                                    | 权限组的名称。      |
   | 类型                                    | 支持 NFS 和 Samba。 |

   > **说明**
   >
   > + 权限组只能和同类型的账户、共享存储目标进行关联。一个权限组可以关联多个共享存储目标，但是一个共享存储目标只能有一个权限组。
   >
   > + 账户是全局的，可以绑定到多个权限组。

### 查看账户详情

1. 点击已创建权限组 ID 处的链接，进入该权限组详情页面，可查看该权限组的基本属性，以及与该权限组绑定的账户和 vNAS 服务器。

   ![](/storage/vnas/_images/basic_operation_17.png)

2. 点击如图所示位置，可对该权限组进行 **修改**、**绑定账号**、**添加到项目**、**删除** 等操作。

   ![](/storage/vnas/_images/basic_operation_21.png)

3. 在权限组详情页面，点击 **创建**，可创建账户。

   ![](/storage/vnas/_images/basic_operation_22.png)

4. 在权限组详情页面，点击 **绑定账户**，可绑定新的账户。

   ![](/storage/vnas/_images/basic_operation_23.png)

   > **说明**
   >
   > + 在当前页面进行添加、修改或是删除账户的操作均可能需要更新所关联的 NAS 服务器，请前往 NAS 服务器详情页进行确认和操作。

## 查看监控

1. 进入文件存储 vNAS 主页面，点击待选择 vNAS 服务器 ID 处的链接：

   ![](/storage/vnas/_images/basic_operation_3.png)

2. 进入 vNAS 服务器详情页面，点击 **监控** 页签，可查看 **性能CPU** 、**内存** 、**硬盘吞吐量** 、**硬盘IOPS** 等监控数据：

   ![](/storage/vnas/_images/basic_operation_24.png)

## 更改配置

根据对 vNAS 服务器的业务需求，可更改 vNAS 服务器的配置，以切合实际的业务需求。

1. 选择待修改的 vNAS 服务器，选择 **更多操作** > **关闭**，或右键选择 **关闭**：

   ![](/storage/vnas/_images/basic_operation_25.png)

   > **说明**
   >
   > 当关闭服务器时，请在客户端停止对共享目标的访问，并执行 umount 操作。

2. 当 vNAS 服务器状态为 **已关闭** 时，右键选择 **更改配置**：

   ![](/storage/vnas/_images/basic_operation_26.png)

3. 弹出 **更改配置** 对话框，根据实际情况进行选择，点击 **提交**：

   ![](/storage/vnas/_images/basic_operation_27.png)

4. 操作完成后，选择 **更多操作** > **启动**，或右键选择 **启动**，更改配置操作完成。

   ![](/storage/vnas/_images/basic_operation_28.png)
