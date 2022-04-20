const deckMapId = "desk-map-1";
const mobMapId = "mob-map-1";
const companyCoords = [55.85137856889441, 37.530732499999914];
const hoverLabel = 'ООО «СК Профлигстрой»';

  ymaps.ready(init);

    function init() {
      var deskMap = new ymaps.Map(deckMapId, {
        center: companyCoords,
        zoom: 17,
        controls: []
      });

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        deskPlacemark = new ymaps.Placemark(deskMap.getCenter(), {
          hintContent: hoverLabel,
        }, {
          iconLayout: 'default#image',
          iconImageHref: './img/map_marker.png',
          iconImageSize: [30, 42],
        }),
        deskMap.geoObjects.add(deskPlacemark);

        //

        var mobMap = new ymaps.Map(mobMapId, {
          center: companyCoords,
          zoom: 17,
          controls: []
        });
        MyIconContentLayoutMob = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        mobPlacemark = new ymaps.Placemark(mobMap.getCenter(), {
          hintContent: hoverLabel,
        }, {
          iconLayout: 'default#image',
          iconImageHref: './img/map_marker.png',
          iconImageSize: [30, 42],
        }),
        mobMap.geoObjects.add(mobPlacemark);

      // отключить прокрутку, когда курсор на карте
      document.getElementById(deckMapId).addEventListener("wheel", (e) => {
        e.stopPropagation();
      })

    }
