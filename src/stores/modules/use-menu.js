import { defineStore } from "pinia";
export const useMenu = defineStore("menuId", {
  state: () => ({
    selectedKeys: ["admin-staffs"],
    openKeys: [],
  }),
  actions: {
    onSelectedKeys(data) {
      this.selectedKeys = data;
    },
    onOpenKeys(data) {
      this.openKeys = data;
    },
  },
});
