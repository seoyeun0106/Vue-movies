import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import MovieList from "../MovieList";
const localVue = createLocalVue();
describe("MovieList Component", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    // 설정 & 동작
    vuetify = new Vuetify();
    wrapper = shallowMount(MovieList, {
      localVue,
      vuetify,
      mocks: {
        $store: {
          state: {
            movie: {
              movies: [
                {
                  imdbID: "1234",
                  Title: "영화 제목",
                  Poster: "image.jpg",
                  Year: "2022",
                },
              ],
            },
          },
        },
      },
    });
  });
  test("영화 제목 출력", () => {
    // 확인
    expect(wrapper.find("v-card-title-stub").text()).toBe("영화 제목");
  });
  test("개봉 년도 출력", () => {
    expect(wrapper.find("v-card-subtitle-stub").text()).toBe("2022");
  });

  test("이미지 경로가 있는 경우", () => {
    const img = wrapper.find("v-img-stub");
    expect(img.attributes("src")).toBe("image.jpg");
    expect(img.attributes("height")).toBe("300");
  });

  test("이미지 경로가 없는 경우", () => {
    wrapper = shallowMount(MovieList, {
      localVue,
      vuetify,
      mocks: {
        $store: {
          state: {
            movie: {
              movies: [
                {
                  imdbID: "1234",
                  Title: "영화 제목",
                  Poster: "N/A",
                  Year: "2022",
                },
              ],
            },
          },
        },
      },
    });
    const img = wrapper.find("v-img-stub");
    expect(img.attributes("src")).toBe("");
    expect(img.attributes("height")).toBe("100");
  });
});
