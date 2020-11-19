import { Notify } from 'quasar';

Notify.setDefaults({
  position: 'bottom',
  color: 'negative',
  textColor: 'white',
  timeout: 1500,
  actions: [{ icon: 'close', color: 'white' }],
});
