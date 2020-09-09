Vue.component('carrusel', {
  template: `
  <div class="container-fluid">
  <br>
  <div class="container">
  <h4>
    <a style="border-bottom: solid 2px #faa22c; float:left">
      Alimentos
    </a>
  </h4>

  <p style="float:right">
    <a href="#">Ir a la categoría <i class="fas fa-chevron-right"></i></a>
  </p>
  </div>

  <div class="slick-list">
            <button @click="leftMove()" class="slick-arrow slick-prev" id="button-prev">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="slick-track" id="track">
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/1.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/2.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/3.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/4.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/5.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/6.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/7.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/8.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/9.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/10.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/11.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/12.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/13.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/14.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/15.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
                <div class="slick">
                    <div>
                        <a href="#">
                            <picture>
                                <img src="./img/16.jpg" alt="Image">
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
            <button @click="rightMove()" class="slick-arrow slick-next" id="button-next">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        <br>
        </div>
  `,
  data(){
    return {
      title: "Hola desde Vue"
    }
  },
  methods: {
    leftMove(){
      const track = app.$el.querySelector("#track");
      const slickList = app.$el.querySelectorAll(".slick-list")[1];
      const slick = app.$el.querySelector(".slick-list").querySelectorAll(".slick")
      const slickWidth = slick[0].offsetWidth;

      function Move(value) {
        const trackWidth =  track.offsetWidth;
        const listWidth = slickList.offsetWidth;


          track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

          if(leftPosition < (trackWidth - listWidth) && value == 2) {
              track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
          } else if(leftPosition > 0 && value == 1) {
              track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
          }
      }

      //Ejecutanco la funcion Move con valor 1
      Move(1);
    },
    rightMove(){
      const track = app.$el.querySelector("#track");
      const slickList = app.$el.querySelectorAll(".slick-list")[1];
      const slick = app.$el.querySelector(".slick-list").querySelectorAll(".slick")
      const slickWidth = slick[0].offsetWidth;

      function Move(value) {
          const trackWidth =  track.offsetWidth;
          const listWidth = slickList.offsetWidth;

          track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

          if(leftPosition < (trackWidth - listWidth) && value == 2) {
              track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
          } else if(leftPosition > 0 && value == 1) {
              track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
          }
      }

      Move(2);
    }
  }
});
