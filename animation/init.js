//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function compassCanvas(dom, input) {
            const attr = {
                hosoi: {
                    'stroke': '#6FB3DE',
                    "stroke-width": 0,
                    'fill': '#FA8F00',
                },
                siro: {
                    'stroke': 'white',
                    "stroke-width":"0.5",
                    'fill': 'white',
                },
                number: {
                    'stroke': 'darkblue',
                    "stroke-width": 0.5,
                    'fill': 'darkblue',
                    'font-size': '22px',
                },
                rect: {
                    empty: {
                        'stroke': '#2080B8',
                        'stroke-width': 0.5,
                    },
                },
            };

            /*----------------------------------------------*
             *
             * compass map spyglass
             *
             *----------------------------------------------*/
            const SIZE = 30; 
            const os = SIZE/2;
            const [w, h] = [input[0].length, input.length];
            const paper = ra.Raphael(dom, (w+1)*SIZE, (h+1)*SIZE, 0, 0);

            // draw grid
            let [you, s, m, c] = [[], [], [], []];
            for (let i=0; i < h; i += 1) {
                for (let j=0; j < w; j += 1) {
                    paper.rect(
                        SIZE*j+os,
                        SIZE*i+os,
                        SIZE, SIZE).attr(attr.rect.empty);
                    if (input[i][j] === 'Y') {
                        draw_you(j, i);
                        you = [j, i];
                    }
                    if (input[i][j] === 'S') {
                        draw_spyglass(j, i);
                        s = [j, i];
                    }
                    if (input[i][j] === 'M') {
                        draw_map(j, i);
                        m = [j, i];
                    }
                    if (input[i][j] === 'C') {
                        draw_compass(j, i);
                        c = [j, i];
                    }
                }
            }

            [s, m, c].forEach(i=>{
                draw_number(i);
            });

            /*----------------------------------------------*
             *
             * step number
             *
             *----------------------------------------------*/
            function draw_number(co) {
                let [j, i] = co;
                x = j * SIZE + os + 15;
                y = i * SIZE + os + 15;
                
                const dist = Math.max(Math.abs(you[0]-j),
                                         Math.abs(you[1]-i));
                const t = paper.text(x, y, dist).attr(attr.number);
            }

            /*----------------------------------------------*
             *
             * you 
             *
             *----------------------------------------------*/
            function draw_you(x, y) {

                x = x * SIZE + os + 15;
                y = y * SIZE + os + 8;
                paper.circle(x, y, 6).attr(attr.hosoi);
                paper.circle(x, y+14, 6).attr(attr.hosoi);
                paper.rect(x-6, y+15, 12, 5).attr(attr.hosoi);
            }

            /*----------------------------------------------*
             *
             * spyglass
             *
             *----------------------------------------------*/
            function draw_spyglass(x, y) {

                x = x * SIZE + os + 13;
                y = y * SIZE + os + 2;
                paper.rect(x, y, 4, 2).attr(attr.hosoi);
                paper.rect(x+1, y+3, 2, 6).attr(attr.hosoi);
                paper.rect(x+0, y+9, 4, 7).attr(attr.hosoi);
                paper.rect(x-1, y+15, 6, 10).attr(attr.hosoi);
            }

            /*----------------------------------------------*
             *
             * map
             *
             *----------------------------------------------*/
            function draw_map(x, y) {
                x = x * SIZE + os + 5;
                y = y * SIZE + os + 3;
                paper.path(
                        'M' + (x) + ',' + y +
                        "l" + (7) + ',' + (6) +
                        "l" + (6) + ',' + (-6) +
                        "l" + (7) + ',' + (6) +
                        "l" + (0) + ',' + (18) +
                        "l" + (-7) + ',' + (-6) +
                        "l" + (-6) + ',' + (6) +
                        "l" + (-7) + ',' + (-6) +
                        'Z').attr(attr.hosoi);
            }

            /*----------------------------------------------*
             *
             * compass
             *
             *----------------------------------------------*/
            function draw_compass(x, y) {

                x = x * SIZE + os + 15;
                y = y * SIZE + os + 15;
                paper.circle(x, y, 10).attr(attr.hosoi);
                paper.path(
                        'M' + (x) + ',' + (y-10) +
                        "l" + (1) + ',' + (10) +
                        "l" + (-1) + ',' + (10) +
                        "l" + (-1) + ',' + (-10) +
                        'Z').attr(attr.siro);
            }

        }
        
        var $tryit;

        var io = new extIO({
            multipleArguments: false,
            functions: {
                python: 'navigation',
                js: 'navigation'
            },
            animation: function($expl, data){
                compassCanvas(
                    $expl[0],
                    data.in
                );
            }
        });
        io.start();
    }
);
