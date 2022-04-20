    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

    function init() {
        // Создание карты.
        var coords = [55.759063, 37.611243];
        var map = new ymaps.Map("map", {
            center: coords,
            zoom: 13,
            controls: [],
        }, {
            // Зададим опции для элементов управления.
            geolocationControlFloat: 'right',
            zoomControlSize: 'large'
        });

        var placemark = new ymaps.Placemark(coords, {}, {
            iconLayout: 'default#image',
            iconImageHref: '../images/map_marker.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-10, -7],
        });

        map.geoObjects.add(placemark);

        map.behaviors.disable(['scrollZoom']);

        map.controls.add('zoomControl', {
 
                size: "small",
                float: 'none',
                position: {
                    top: '260px',
                    right: '10px'
                }
            
        });

        map.controls.add('geolocationControl', {
            float: 'none',
                position: {
                    top: '350px',
                    right: '10px'
                }
        });
    }