import { ref, onMounted, onBeforeUnmount } from "vue";

export const useTicks = (startAt: number = 0) => {
  const progressVal = ref(startAt);
  const intervalId = ref<any>(null);

  onMounted(() => {
    intervalId.value = setInterval(() => {
      let val = progressVal.value + 1;

      if (val >= 30) {
        val = 0;
      }

      progressVal.value = val;
    }, 1000);
  });

  onBeforeUnmount(() => {
    if (intervalId.value) {
      clearInterval(intervalId.value);
    }
  });

  return {
    progressVal,
  };
};
