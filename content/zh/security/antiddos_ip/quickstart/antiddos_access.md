---
title: "业务接入"
description: 高防IP操作方式
draft: false
weight: 20
keyword: 高防IP, 高防IP实例, 添加转发策略

---

高防 IP 支持域名接入和端口接入，本小节为您介绍如何为创建的高防 IP 接入业务。

## 操作步骤

1. 登录管理控制台。
2. 在控制台导航栏中，选择**产品与服务** > **安全服务** > **高防IP**，进入**高防 IP-实例列表**页面。
3. 进入**实例列表**页面，在高防 IP 所在行末尾点击**接入**。
4. 根据业务需要选择接入方式。
   - 域名接入：即接入网站业务，待接入的网站域名需已完成 ICP 备案。
   - 端口接入：即接入非网站业务，指端游、手游以及各类APP等。

请根据业务需求按照以下步骤进行业务接入。

> 同一个高防 IP 可同时进行域名接入和端口接入，总计最多不超过50个。

### 域名接入

1. 在**域名接入**页签，点击**添加业务**。

2. 根据提示信息输入参数。

   参数解释如下：

   | <span style="display:inline-block;width:140px">参数</span> | <span style="display:inline-block;width:520px">说明</span>   |
   | ---------------------------------------------------------- | ------------------------------------------------------------ |
   | 关联高防 IP                                                | 用于 DDOS 防护的高防 IP。                                    |
   | 网站域名                                                   | 指需要防护的网站地址的域名，例如：www.example.com，exam.example.com<br/>需要防护的网站域名已完成 ICP 备案。 |
   | 协议                                                       | 指网站域名的通信协议 ，如：HTTP 和 HTTPS                     |
   | 转发端口                                                   | 高防 IP 的转发端口，范围为：0-65535                          |
   | 源站 IP 地址                                               | 指业务真实源站 IP 地址，如网站业务服务器地址。               |
   | 源站端口                                                   | 指业务真实源站 IP 端口，范围为：20~65535                     |
   | 证书                                                       | 选择 HTTPS 时需要选择 SSL 证书，可在**产品与服务** > **域名与网站** > **SSL证书服务**中**我的证书**界面购买SSL证书或上传证书。 |

3. 点击**下一步**。

   系统自动保存当前填写信息，并配置策略，添加成功后，根据页面提示执行后续相应配置。

   <img src="../../_images/04.png" style="zoom:50%;" />


#### 第一步：放行回源地址

> 为避免源站拦截 DDoS 高防 IP 的回源 IP 而影响业务，建议您在源站的防火墙、Web应用防火墙、IPS入侵防护系统、流量管理等设备上设置白名单策略，设置放行DDoS高防回源 IP。

4. 以青云云防火墙为例，创建云防火墙访问控制策略，详细操作请参见[访问控制策略](/security/firewall/manual/cfw/)。

#### 第二步：域名过白

5. 在左侧导航栏，点击**域名过白**，进入**域名过白**页面。
6. 点击**添加域名**。

7. 在**添加域名**弹出框中根据提示信息输入参数，点击**确定**。

   > 域名网站请提前进行 ICP 备案。

   ![](../../_images/05.png)

   添加完成后，网站域名列表的状态显示**通过**，表示域名过白成功。

#### 第三步：测试网络通信

8. 模拟客户端，配置本地 host 解析到高防 IP。

   以 Windows 10为例，在 C:\Windows\System32\drivers\etc 中打开 HOSTS 文件。

   增加一条如下内容，并保存。

   ```
   <高防 IP 地址> <被防护网站的域名>
   ```

   例如：

   ```
   10.1.10.2 www.example.com
   ```

   在本地计算机对被防护的域名运行 ping 命令。当解析到的 IP 地址是 hosts 文件中绑定的高防 IP 地址时，说明本地hosts生效。

9. 打开浏览器，访问被防护的域名，若能正常访问表示配置生效。

   > 如果显示“该域名未过白，请联系客服”，请提交工单，并将`高防 IP`和`域名`备注在工单中。

#### 第四步：接入业务流量

> - 前往接入网站所属 DNS 解析服务商控制台，将流量指向独享的高防 IP。支持 A 记录接入。
> - 完成切换后，网站的访问流量都会经过 DDoS 高防清洗，再转发到源站服务器。

10. 以使用了青云的 DNS 服务为例，可参考青云 DNS 配置子域名进行配置，详情请参见[管理子域名](/site/dns/manual/dnsrecord/subzone/)。

    ![](../../_images/06.png)

### 端口接入

1. 在**端口接入**页签，点击**添加业务**。

2. 根据提示信息输入参数。

   参数解释如下：

   | <span style="display:inline-block;width:140px">参数</span> | <span style="display:inline-block;width:520px">说明</span> |
   | ---------------------------------------------------------- | ---------------------------------------------------------- |
   | 关联高防 IP                                                | 用于 DDOS 防护的高防 IP。                                  |
   | 协议                                                       | 当前业务使用的通信协议，如： TCP 协议                      |
   | 转发端口                                                   | 高防 IP 的转发端口，范围为：0-65535                        |
   | 源站 IP 地址                                               | 指当前业务对应后端服务器真实地址，如网站业务服务器地址。   |
   | 源站端口                                                   | 指当前业务对应后端服务器真实地址，范围为：20~65535         |

3. 点击**下一步**。

   系统自动保存当前填写信息，并配置策略，添加成功后，根据页面提示执行后续相应配置。

   <img src="../../_images/07_ac.png" style="zoom:50%;" />


#### 第一步：放行回源地址

> 为避免源站拦截 DDoS 高防 IP 的回源 IP 而影响业务，建议您在源站的防火墙、Web应用防火墙、IPS 入侵防护系统、流量管理等设备上设置白名单策略，设置放行 DDoS 高防回源 IP。

4. 以青云云防火墙为例，创建云防火墙访问控制策略，详细操作请参见[访问控制策略](/security/firewall/manual/cfw/)。

#### 第二步：测试网络通信

5. 对于端口接入的业务，直接通过 IP 进行交互，可在计算机本地连接高防 IP 地址和访问转发端口，查看是否能连通。

   以 ssh 协议为例，高防 IP 为10.1.1.2，转发端口为2222，源站 IP 为10.2.2.3，源站端口为22，当高防 IP 下接入信息的**接入状态**显示**生效**，执行以下命令。

   ![](../../_images/access-1.png)

   ```
   ssh root@10.1.1.2 -p 2222
   ```

   若`ssh`命令能连通则说明转发成功。

#### 第三步：接入业务流量

6. 如果您的业务可直接通过 IP 进行访问，您只需要将业务 IP 替换为独享的高防 IP，即可将业务流量指向高防 IP。
