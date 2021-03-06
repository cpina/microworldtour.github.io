var macaroni_icon = new MicroIcon({iconUrl: '/img/macaroni.png'})
var macaroni_colour = '#11e3fe';

var macaroniMicrobit = [
    {
        popup: "Nicholas wrapped up Macaroni in Towcester.",
        lonLat: [52.133597, -0.990607],
	options: {
	    icon: macaroni_icon
        }
    },
    {
        popup: "Jen received Macaroni from Nicholas at January's Python Code Dojo, M&S Digital.",
        lonLat: [51.5168805,-0.1813374],
        options: {
            icon: macaroni_icon 
        }
    },
    {
        popup: "Macaroni slept in North London",
        lonLat: [51.5969828,-0.1082401],
        options: {
            icon: macaroni_icon
        }
    }
];

macaroniMicrobit.forEach(addMarker);
addRoute(macaroniMicrobit, macaroni_colour);
