import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import SearchBar from "@/components/SearchBar";
import store from "@/store";

const localVue = createLocalVue();
describe("SearchBar component", () => {
  let vuetify;
  let wrapper;
  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(SearchBar, {
      localVue,
      vuetify,
      store,
    });
  });
  test("제목을 입력했을 때 스토어 업데이트", () => {
    wrapper.vm.title = "lion";
  });

  test("로딩 중 아이콘 확인", async () => {
    expect(wrapper.find(".v-progress-circular").exists()).toBe(false);
    wrapper.vm.$store.commit("movie/updateState", {
      loading: true,
    });
    // 동작
    await wrapper.vm.$nextTick();
    // 확인
    expect(wrapper.find(".v-progress-circular").exists()).toBe(true);
  });
});
