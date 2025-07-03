(function(){
  const translations = {
    "威胁感知": "Threat Perception",
    "攻击事件": "Attack Events",
    "事件": "Event",
    "密签事件": "Signature Events",
    "溯源": "Attribution",
    "节点拓扑": "Topology",
    "蜜罐管理": "Honeypot Management",
    "探针管理": "Probe Management",
    "代理管理": "Proxy Management",
    "协议转发": "Protocol Forward",
    "透明转发": "Transparent Forward",
    "诱捕管理": "Trap Management",
    "诱饵管理": "Bait Management",
    "协议类型": "Protocol Types",
    "镜像列表": "Image List",
    "系统设置": "System Settings",
    "修改密码": "Change Password",
    "退出": "Logout",
    "进入大屏": "Dashboard",
    "下载支持": "Download",
    "原始密码": "Old Password",
    "新密码": "New Password",
    "确认新密码": "Confirm Password",
    "取消": "Cancel",
    "保存": "Save",
    "下发中": "Pushing",
    "异常": "Error",
    "成功": "Success",
    "否": "No",
    "是": "Yes",
    "启动中": "Starting",
    "在线": "Online",
    "未知": "Unknown",
    "密码必须包含字母和数字": "Password must contain letters and numbers",
    "请输入新密码": "Please enter new password",
    "密码长度不能小于": "Password length must be at least",
    "位": "characters",
    "请再次输入密码": "Please repeat password",
    "两次输入密码不一致": "Passwords do not match",
    "请输入原始密码": "Please enter old password",
    "修改成功": "Modification successful",
    "欺骗防御系统": "Deception Defense System"
  };

  function translateTextNodes(node){
    if(node.nodeType===Node.TEXT_NODE){
      const text=node.nodeValue.trim();
      if(translations[text]){
        node.nodeValue=translations[text];
      }
    }else if(node.nodeType===Node.ELEMENT_NODE){
      for(let child of Array.from(node.childNodes)){
        translateTextNodes(child);
      }
    }
  }

  document.addEventListener('DOMContentLoaded',function(){
    translateTextNodes(document.body);
    const observer=new MutationObserver(function(mutations){
      for(let m of mutations){
        m.addedNodes.forEach(function(n){
          translateTextNodes(n);
        });
      }
    });
    observer.observe(document.body,{childList:true,subtree:true});
  });
})();
