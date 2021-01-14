import React from "react";
import $ from "jquery"
import { SVG } from "@svgdotjs/svg.js"

import '../style/Home.css'

export default class HomePage extends React.Component {

    componentDidMount() {
        const width = $(window).width() * 2
        const height = $(window).height() * 2
        const svg1 = SVG().size(width, height).addTo("#canvas").viewbox(width/4, height/4, width/2, height/2)
        const svg2 = SVG().size(width, height).addTo("#canvas").viewbox(width/4, height/4, width/2, height/2)
        const svg3 = SVG().size(width, height).addTo("#canvas").viewbox(width/4, height/4, width/2, height/2)
        const svg4 = SVG().size(width, height).addTo("#canvas").viewbox(width/4, height/4, width/2, height/2)
        const svg5 = SVG().size(width, height).addTo("#canvas").viewbox(width/4, height/4, width/2, height/2)
        const svg6 = SVG().size(width, height).addTo("#canvas").viewbox(width/4, height/4, width/2, height/2)

        const gridSize = Math.floor(width / 32);

        $("#canvas").on('mousemove', e => {
            e.preventDefault()
            let x = e.clientX//+
            let y = e.clientY

            moveLayer(svg1, width/2-x/2, y)
            moveLayer(svg2, width/2-x, height/2-y/2)
            moveLayer(svg3, height/2-y, x)
            moveLayer(svg4, height/2-y/2, width/2-x*0.33)
            moveLayer(svg5, y, width/2-x/2)
            moveLayer(svg6, y, x*0.75)
        })

        function moveLayer(layer, x, y) {
            let {width, height} = layer.viewbox()
            layer._animation && layer._animation.unschedule()
/*             x = Math.round(x / gridSize) * gridSize
            y = Math.round(y / gridSize) * gridSize */
            layer._animation = layer.animate(500)
                .viewbox({
                    x, y, width, height
                })
        }
        function generateRectangles(svg) {
            for (let i = 0; i < 30; i++) {
                let w = Math.ceil(Math.random() * 4) * gridSize
                let h = Math.ceil(Math.random() * 4) * gridSize
                let x = Math.floor(Math.random() * 32) * gridSize
                let y = Math.floor(Math.random() * 32) * gridSize
                let fillColor = ["red", "blue", "yellow"][Math.floor(Math.random() * 3)]
                svg.rect(w, h)
                    .move(x, y)
                    .fill(fillColor)
                    .opacity(0.5)
                    .css("mix-blend-mode", "difference")
                    
            }
        }
        generateRectangles(svg1)
        generateRectangles(svg2)
        generateRectangles(svg3)
        generateRectangles(svg4)
        generateRectangles(svg5)
        generateRectangles(svg6)
        
    }
    render() {
        document.title = "Stephen Karukas - Home"
        return <div id="canvas"></div>
    }
}