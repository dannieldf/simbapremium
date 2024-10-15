Page.body.append
(
    new Component
    (
        {
            style:
            {
                font_family: 'sans-serif',
                text_align: 'center',
                margin: '50px auto',
                width: '500px',
                padding: '50px',
                border_radius: '5px',
                border: 'solid 1px #e3e3e3',
                background_color: '#f8f8f8',
                color: '#6495ed'
            },
            components:
            [
                new Component
                (
                    {
                        node: 'p',
                        parse: true,
                        style: 
                        {
                            font_weight: 'bold',
                            margin_bottom: '15px'
                        },
                        content: 'Olá Mundo!<br><br>Essa é a versão offline da aplicação. Suba a versão com Node.js'
                    }
                )
            ]
        }
    )
)