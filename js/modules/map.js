// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
$(document).ready(() => {
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      center: [59.895687, 30.423944],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 10
    });

    (MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    )),
      (myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: "Складское помещение",
          balloonContent: "Требуются водители",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "/img/icons/map-marker.png",
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
        }
      )),
      (myPlacemarkWithContent = new ymaps.Placemark(
        [60.001429, 30.296734],
        {
          hintContent: "Бухгалтерия",
          balloonContent: "Обращаться по поводу франшизы",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#imageWithContent",
          // Своё изображение иконки метки.
          iconImageHref: "/img/icons/map-marker.png",
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
          // Смещение слоя с содержимым относительно слоя с картинкой.
          // iconContentOffset: [15, 15],
          // Макет содержимого.
          // iconContentLayout: MyIconContentLayout
        }
      ));
      (myPlacemarkWithContentTwo = new ymaps.Placemark(
        [59.921566, 30.313282],
        {
          hintContent: "Основной филиал",
          balloonContent: "Санкт-Петербург, ул.Бабушкина, д.12/1"
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#imageWithContent",
          // Своё изображение иконки метки.
          iconImageHref: "/img/icons/map-marker.png",
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
          // Смещение слоя с содержимым относительно слоя с картинкой.
          // iconContentOffset: [15, 15],
          // Макет содержимого.
          // iconContentLayout: MyIconContentLayout
        }
      ));

    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent).add(myPlacemarkWithContentTwo);

    myMap.behaviors.disable("scrollZoom");
  }
});

// ------
