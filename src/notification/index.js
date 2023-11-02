import { createApp,defineComponent } from "vue";
import Notification from "./Notification.vue";
// Track all instances of notifications currently open
const notificationState = [];
let position  ="top-right"
// Set default values
const durationDefault = 4500;
const typeDefault = "primary";

// Create a new notification
const app = defineComponent({
  extends: Notification,
  data() {
    return {notificationState ,position }
  },
  methods:{
    // Remove the notification from state
 closeNotification(key) {
  const index = notificationState.findIndex((n) => key === n.key);
  clearTimeout(notificationState[index]._timer);
  notificationState.splice(index, 1);
}
  },
})

const notificationContainer = document.createElement("div");
notificationContainer.id = "notification-container";
document.body.appendChild(notificationContainer);
createApp(app).mount(notificationContainer)
function newNotification(args, where) {
  if (typeof args === "string") {
    args = {
      message: args,
    };
  }
  args.key ? args.key =  args.key : args.key =  new Date().getMilliseconds();
  args.duration = args.duration || durationDefault;
  args.type = args.type || typeDefault;
  args._timer = setTimer(args.key, args.duration);
  where ? position = where : ''
  notificationState.push(args) 
  
}

// Set a timer to kill the notification after the specified duration
function setTimer(key, duration) {
  return setTimeout(() => {
    closeNotificationtest(key);
  }, duration);
}
function closeNotificationtest(key) {
  const index = notificationState.findIndex((n) => key === n.key);
  clearTimeout(notificationState[index]._timer);
  notificationState.splice(index, 1);
}



const api = {
  open: newNotification
};

export default api;
