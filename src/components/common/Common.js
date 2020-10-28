import { Message } from 'element-ui';
export default{
  login:function(){
    console.log("1111");
  },
  success:function(message) {
    Message.success({message:message,offset:70});
  },
  error: function (message) {
    Message.error({message:message,offset:70});
  },
  info: function (message) {
    Message.info({message:message,offset:70});
  }
}
