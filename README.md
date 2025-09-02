
```sql

vrrp_script chk_nginx_service {
  script "/usr/lib/keepalived/nginx-ha-check"
  interval 3
  weight 50
}
vrrp_instance VI_1 {
  interface eth0
  state BACKUP
  priority 99
  virtual_router_id 51
  advert_int 1
  accept
  unicast_src_ip 192.168.10.12
  unicast_peer {
    192.168.10.10
    192.168.10.11
  }
  virtual_ipaddress {
    192.168.10.100
  }
  track_script {
    chk_nginx_service
  }
}

```