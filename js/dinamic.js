class Autenticacao
{
    static formulario()
    {
        var components;
        components =
            [
                new Component
                (
                    {
                        style:
                            {
                                display: 'flex',
                                margin_top: '15px'
                            },
                        components:
                            [
                                new Component
                                (
                                    {
                                        node: 'label',
                                        content: 'Email: ',
                                        style:
                                        {
                                            padding: '10px',
                                            cursor: 'pointer',
                                            width: '30%',
                                            text_align: 'right',
                                            display: 'inline-block'
                                        },
                                        attributes:
                                        {
                                            for: 'email'
                                        }
                                    }
                                ),
                                
                                new Input
                                (
                                    {
                                        attributes:
                                        {
                                            id: 'email',
                                            value: 'augusto.cesar@domus.rm'
                                        },
                                        style:
                                        {
                                            width: '70%'
                                        }
                                    }
                                )
                            ]
                    }
                ),
                new Component
                (
                    {
                        style:
                            {
                                display: 'flex',
                                margin_top: '15px'
                            },
                        components:
                            [
                                new Component
                                (
                                    {
                                        node: 'label',
                                        content: 'Senha: ',
                                        style:
                                        {
                                            padding: '10px',
                                            cursor: 'pointer',
                                            width: '30%',
                                            text_align: 'right',
                                            display: 'inline-block'
                                        },
                                        attributes:
                                        {
                                            for: 'senha'
                                        }
                                    }
                                ),
                                
                                new Input
                                (
                                    {
                                        attributes:
                                        {
                                            type: 'password',
                                            id: 'senha',
                                            value: '1234567890'
                                        },
                                        style:
                                        {
                                            width: '70%'
                                        }
                                    }
                                )
                            ]
                    }
                ),
                new Component
                (
                    {
                        style:
                        {
                            display: 'grid',
                            gap: '10px',
                            grid_template_columns: 'auto auto',
                            margin_top: '20px',
                            text_align: 'center'
                        },
                        components:
                        [
                            new Button
                            (
                                {
                                    type: 'secondary',
                                    content: 'Esqueci a senha',
                                    attributes:
                                        {
                                            onclick: 'Autenticacao.ajudaSenha();'
                                        }
                                }
                            ),
                            new Button
                            (
                                {
                                    type: 'primary',
                                    content: 'Entrar',
                                    attributes:
                                        {
                                            onclick: 'Autenticacao.envia();'
                                        }
                                }
                            )
                        ]
                    }
                )
            ];
        return components;
    }

    static envia()
    {
        this.sucesso();
    }

    static sucesso()
    {
        var icone;
        PainelControle.carrega();
        icone = Usuario.icone();
        icone.setStyle('height', '100%');
        Pagina.header.set
        (
            'user', 
            icone
        );
        Usuario.ativaMenu(icone);
    }

    static logout()
    {
        Usuario.destroiMenu();
        Pagina.header.set('core', null);
        Pagina.header.set('user', null);
        Pagina.home();
    }

    static ajudaSenha()
    {
        alert('Em construção');
    }
}

class CadastroAtendimento
{
    static titulo = 'Cadastro de Atendimento';
    
    static icone()
    {
        var icone;
        icone = new Icone({type: 'app_registration'});
        return icone;
    }

    static carrega()
    {
        Pagina.corpo.set
        (
            'components',
            [
                new Component
                (
                    {
                        style: 
                        {
                            display: 'grid',
                            grid_template_columns: 'auto auto',
                            gap: '20px',
                            margin_top: '30px'
                        },
                        components:
                        [
                            new Glass
                            (
                                {
                                    title: 'Upload de arquivos padrão',
                                    style:
                                    {
                                        padding: 0
                                    },
                                    components:
                                    [
                                        new Component
                                        (
                                            {
                                                style:
                                                {
                                                    padding: '20px'
                                                },
                                                components:
                                                [
                                                    new Component
                                                    (
                                                        {
                                                            content: 'Opção 1 - <b>Arquivos CCS Sisbajud</b>',
                                                            parse: true
                                                        }
                                                    ),
                                                    new Component
                                                    (
                                                        {
                                                            style: 
                                                            {
                                                                padding: '15px 0',
                                                                text_align: 'center'
                                                            },
                                                            components:
                                                            [
                                                                new File()
                                                            ]
                                                        }
                                                    )
                                                ]
                                            }
                                        ),
                                        
                                        new Component
                                        (
                                            {
                                                style:
                                                {
                                                    padding: '20px',
                                                    border_top: 'solid 1px #cccccc'
                                                },
                                                components:
                                                [
                                                    new Component
                                                    (
                                                        {
                                                            content: 'Opção 2 - <b>Arquivos CCS Simba Manual</b>',
                                                            parse: true
                                                        }
                                                    ),
                                                    new Component
                                                    (
                                                        {
                                                            node: 'p',
                                                            content: 'Envie os 7 arquivos .txt gerados pelo Validador na pasta arqtxt',
                                                            parse: true
                                                        }
                                                    ),
                                                    new Component
                                                    (
                                                        {
                                                            style: 
                                                            {
                                                                padding: '15px 0',
                                                                text_align: 'center'
                                                            },
                                                            components:
                                                            [
                                                                new File
                                                                (
                                                                    {
                                                                        multiple: true,
                                                                        accept: '.txt'
                                                                    }
                                                                )
                                                            ]
                                                        }
                                                    )
                                                ]
                                            }
                                        )
                                    ]
                                }
                            ),
                            new Glass
                            (
                                {
                                    title: 'Cadastro manual',
                                    style:
                                    {
                                        padding: 10
                                    },
                                    components:
                                    [
                                        new Component
                                        (
                                            {
                                                style:
                                                    {
                                                        padding: '10px'
                                                    },
                                                components:
                                                    [
                                                        new Component
                                                        (
                                                            {
                                                                node: 'label',
                                                                style:
                                                                {
                                                                    display: 'flex',
                                                                    align_items: 'center',
                                                                    margin_top: '10px'
                                                                },
                                                                components:
                                                                [
                                                                    new Component
                                                                    (
                                                                        {
                                                                            content: 'Órgão: ',
                                                                            style: 
                                                                            {
                                                                                width: '30%', 
                                                                                text_align: 'right',
                                                                                padding_right: '10px',
                                                                                box_sizing: 'border-box'
                                                                            }
                                                                        }
                                                                    ),
                                                                    new Input
                                                                    (
                                                                        {
                                                                            style: {width: '70%'}
                                                                        }
                                                                    )
                                                                ]
                                                            }
                                                        ),
                                                        new Component
                                                        (
                                                            {
                                                                node: 'label',
                                                                style:
                                                                {
                                                                    display: 'flex',
                                                                    align_items: 'center',
                                                                    margin_top: '10px'
                                                                },
                                                                components:
                                                                [
                                                                    new Component
                                                                    (
                                                                        {
                                                                            content: 'Requisitante: ',
                                                                            style: 
                                                                            {
                                                                                width: '30%', 
                                                                                text_align: 'right',
                                                                                padding_right: '10px',
                                                                                box_sizing: 'border-box'
                                                                            }
                                                                        }
                                                                    ),
                                                                    new Input
                                                                    (
                                                                        {
                                                                            style: {width: '70%'}
                                                                        }
                                                                    )
                                                                ]
                                                            }
                                                        ),
                                                        new Component
                                                        (
                                                            {
                                                                node: 'label',
                                                                style:
                                                                {
                                                                    display: 'flex',
                                                                    align_items: 'center',
                                                                    margin_top: '10px'
                                                                },
                                                                components:
                                                                [
                                                                    new Component
                                                                    (
                                                                        {
                                                                            content: 'Instituição Financeira: ',
                                                                            style: 
                                                                            {
                                                                                width: '30%', 
                                                                                text_align: 'right',
                                                                                padding_right: '10px',
                                                                                box_sizing: 'border-box'
                                                                            }
                                                                        }
                                                                    ),
                                                                    new Input
                                                                    (
                                                                        {
                                                                            style: {width: '70%'}
                                                                        }
                                                                    )
                                                                ]
                                                            }
                                                        ),
                                                        new Component
                                                        (
                                                            {
                                                                node: 'label',
                                                                style:
                                                                {
                                                                    display: 'flex',
                                                                    align_items: 'center',
                                                                    margin_top: '10px'
                                                                },
                                                                components:
                                                                [
                                                                    new Component
                                                                    (
                                                                        {
                                                                            content: 'Status do caso: ',
                                                                            style: 
                                                                            {
                                                                                width: '30%', 
                                                                                text_align: 'right',
                                                                                padding_right: '10px',
                                                                                box_sizing: 'border-box'
                                                                            }
                                                                        }
                                                                    ),
                                                                    new Select
                                                                    (
                                                                        {
                                                                            style: {width: '70%'},
                                                                            components:
                                                                            [
                                                                                new Component
                                                                                (
                                                                                    {
                                                                                        node: 'option',
                                                                                        content: 'Aberto'
                                                                                    }
                                                                                )
                                                                            ]
                                                                        }
                                                                    )
                                                                ]
                                                            }
                                                        ),
                                                        new Component
                                                        (
                                                            {
                                                                style: 
                                                                {
                                                                    padding: '10px 0',
                                                                    text_align: 'center'
                                                                },
                                                                components:
                                                                [
                                                                    new Button
                                                                    (
                                                                        {
                                                                            type: 'primary',
                                                                            content: 'Salvar',
                                                                            attributes: {draggable: true}
                                                                        }
                                                                    )
                                                                ]
                                                            }
                                                        )
                                                    ]
                                            }
                                        )
                                    ]
                                }
                            )
                        ]
                    }
                )
            ]
        );
    }
}

class Conciliacao
{
    static titulo = 'Conciliação CCS x Contas Simba';
    
    static icone()
    {
        var icone;
        icone = new Icone({type: 'join_right'});
        return icone;
    }

    static carrega()
    {
        Pagina.corpo.set
        (
            'components',
            [
                new Container
                (
                    {
                        parse: true,
                        content: '<b>' + this.titulo + '</b><br><br><i>em construção</i>'
                    }
                )
            ]
        );
    }
}

class Container extends Glass
{
    static defaults =
        {
            style:
            {
                background_color: '#ffffff',
                padding: '50px',
                margin_top: '30px'
            }
        };

    constructor(parameters)
    {
        parameters =
            {
                ...Container.defaults,
                ...parameters
            };
        super(parameters);
    }
}

class Icone extends Svg
{
    static defaults =
        {
            type: 'app',
            cor1: '#e35150',
            cor2: '#0d173f',
            cor3: '#ffffff',
            width: 0,
            height: 0,
            attributes: {fill: 'none'}
        };

    cor1;

    cor2;

    cor3;

    width = 0;

    height = 0;

    type;

    constructor(parameters)
    {
        var i, width, height;
        parameters = isset(parameters) ? parameters : {};
        width = isset(parameters.width);
        height = isset(parameters.height);
        parameters =
            {
                ...Icone.defaults,
                ...parameters
            };
        super();
        for (i in parameters)
        {
            if 
            (
                (i == 'width' && !width) 
                || 
                (i == 'height' && !height)
            )
            {
                continue;
            }
            this.set(i, parameters[i]);
        }
    }

    set(key, value)
    {
        var data;
        switch (key)
        {
            case 'type':
                this[key] = value;
                this.clear();
                data = this.data();
                this.set('components', data.components);
                this.set('width', data.width);
                this.set('height', data.height);
                break;
            case 'cor1':
            case 'cor2':
                this[key] = value;
                this.set('type', this.type);
                break;
            case 'width':
            case 'height':
                this[key] = value;
                this.setAttribute(key, value);
                this.setAttribute('viewBox', '0 0 ' + this.width + ' ' + this.height);
                break;
            default:
                super.set(key, value);
        }
    }

    data()
    {
        var data;
        switch (this.type)
        {
            case 'add_to_queue':
                data =
                    {
                        width: 21,
                        height: 23,
                        components:
                        [
                            Icone.path
                            (
                                'M10.5003 13.25C10.0903 13.25 9.75027 12.91 9.75027 12.5V7.25C9.75027 6.84 10.0903 6.5 10.5003 6.5C10.9103 6.5 11.2503 6.84 11.2503 7.25V12.5C11.2503 12.91 10.9103 13.25 10.5003 13.25ZM10.5003 16.75C10.3686 16.7513 10.238 16.7263 10.116 16.6765C9.99413 16.6267 9.88338 16.5531 9.79027 16.46C9.70027 16.36 9.63027 16.25 9.57027 16.13C9.5221 16.0092 9.49831 15.88 9.50027 15.75C9.50027 15.49 9.61027 15.23 9.79027 15.04C10.1603 14.67 10.8403 14.67 11.2103 15.04C11.3903 15.23 11.5003 15.49 11.5003 15.75C11.5003 15.88 11.4703 16.01 11.4203 16.13C11.3703 16.25 11.3003 16.36 11.2103 16.46C11.1172 16.5531 11.0064 16.6267 10.8845 16.6765C10.7626 16.7263 10.632 16.7513 10.5003 16.75Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M10.4999 22.2509C9.82989 22.2509 9.14989 22.0809 8.54989 21.7309L2.60989 18.3009C1.40989 17.6009 0.659889 16.3109 0.659889 14.9209V8.08096C0.659889 6.69096 1.40989 5.40096 2.60989 4.70097L8.54989 1.27097C9.74989 0.570972 11.2399 0.570972 12.4499 1.27097L18.3899 4.70097C19.5899 5.40096 20.3399 6.69096 20.3399 8.08096V14.9209C20.3399 16.3109 19.5899 17.6009 18.3899 18.3009L12.4499 21.7309C11.8499 22.0809 11.1699 22.2509 10.4999 22.2509ZM10.4999 2.25097C10.0899 2.25097 9.66989 2.36097 9.29989 2.57097L3.35989 6.00096C2.61989 6.43096 2.15989 7.22096 2.15989 8.08096V14.9209C2.15989 15.7709 2.61989 16.5709 3.35989 17.0009L9.29989 20.4309C10.0399 20.8609 10.9599 20.8609 11.6899 20.4309L17.6299 17.0009C18.3699 16.5709 18.8299 15.7809 18.8299 14.9209V8.08096C18.8299 7.23096 18.3699 6.43096 17.6299 6.00096L11.6899 2.57097C11.3299 2.36097 10.9099 2.25097 10.4999 2.25097Z',
                                this.cor1
                            )
                        ]
                    };
                return data;
            case 'app':
                data = 
                    {
                        height: 47,
                        width: 41,
                        components: 
                        [
                            Icone.path
                            (
                                'M20.6745 0.442682C21.9573 1.40157 23.3704 2.14597 24.7414 2.96187C25.6666 3.51281 26.6171 4.03431 27.5718 4.57684V12.4498C25.1788 11.0788 22.832 9.73718 20.5778 8.44605C16.2165 10.9736 11.8469 13.5012 7.4183 16.0667V38.9917C6.08511 38.5207 5.05052 37.7006 3.90238 37.1118C2.72059 36.5062 1.6145 35.7618 0.5 35.0931V12.1891C1.05935 11.8442 1.68599 11.4573 2.31264 11.0746C4.86547 9.51429 7.5655 8.20633 10.051 6.52406C11.052 5.84695 12.2296 5.4348 13.281 4.82077C14.938 3.85768 16.5488 2.81467 18.1932 1.83055C18.6937 1.53195 19.2572 1.3511 19.7619 1.05671C20.0016 0.917921 20.1656 0.648759 20.3633 0.438477C20.4685 0.438477 20.5736 0.438477 20.6787 0.438477L20.6745 0.442682Z',
                                this.cor2
                            ),
                            Icone.path
                            (
                                'M40.4999 35.1265C38.9396 36.0139 37.4004 36.8719 35.8779 37.7635C34.2713 38.7097 32.69 39.6981 31.0877 40.6485C30.2465 41.1448 29.376 41.5906 28.5306 42.0785C26.5792 43.2098 24.5437 44.1939 22.7058 45.5271C22.0918 45.9729 21.3011 46.179 20.4558 46.5575C18.2856 45.3084 16.0398 44.0173 13.7898 42.7219V34.9709C16.1492 36.3419 18.374 37.6415 20.5777 38.9242C25.0147 36.3714 29.4264 33.8354 33.9307 31.2489V8.37012C36.1639 9.65284 38.3214 10.8935 40.4999 12.1426V35.1265Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M13.7438 27.7751V19.5068C16.0359 18.1904 18.3279 16.8824 20.6074 15.5745C22.9584 16.9371 25.2883 18.2913 27.5762 19.6245V27.6868C25.2673 29.0284 22.9878 30.3531 20.62 31.7284C18.3784 30.4415 16.0947 29.1293 13.7438 27.7793V27.7751Z',
                                this.cor2
                            )
                        ]
                    };
                return data;
            case 'app_registration':
                data =
                    {
                        width: 23,
                        height: 23,
                        components:
                        [
                            Icone.path
                            (
                                'M14.4995 22.25H8.49951C3.06951 22.25 0.749512 19.93 0.749512 14.5V8.49999C0.749512 3.07 3.06951 0.75 8.49951 0.75H10.4995C10.9095 0.75 11.2495 1.09 11.2495 1.5C11.2495 1.91 10.9095 2.25 10.4995 2.25H8.49951C3.88951 2.25 2.24951 3.88999 2.24951 8.49999V14.5C2.24951 19.11 3.88951 20.75 8.49951 20.75H14.4995C19.1095 20.75 20.7495 19.11 20.7495 14.5V12.5C20.7495 12.09 21.0895 11.75 21.4995 11.75C21.9095 11.75 22.2495 12.09 22.2495 12.5V14.5C22.2495 19.93 19.9295 22.25 14.4995 22.25Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M7.99987 17.1889C7.38987 17.1889 6.82987 16.9689 6.41987 16.5689C5.92987 16.0789 5.71987 15.3689 5.82987 14.6189L6.25987 11.6089C6.33987 11.0289 6.71987 10.2789 7.12987 9.86894L15.0099 1.98896C16.9999 -0.00103906 19.0199 -0.00103906 21.0099 1.98896C22.0999 3.07896 22.5899 4.18895 22.4899 5.29895C22.3999 6.19895 21.9199 7.07895 21.0099 7.97895L13.1299 15.8589C12.7199 16.2689 11.9699 16.6489 11.3899 16.7289L8.37987 17.1589C8.24987 17.1889 8.11987 17.1889 7.99987 17.1889ZM16.0699 3.04896L8.18987 10.9289C7.99987 11.1189 7.77987 11.5589 7.73987 11.8189L7.30987 14.8289C7.26987 15.1189 7.32987 15.3589 7.47987 15.5089C7.62987 15.6589 7.86987 15.7189 8.15987 15.6789L11.1699 15.2489C11.4299 15.2089 11.8799 14.9889 12.0599 14.7989L19.9399 6.91895C20.5899 6.26895 20.9299 5.68895 20.9799 5.14895C21.0399 4.49895 20.6999 3.80895 19.9399 3.03896C18.3399 1.43896 17.2399 1.88896 16.0699 3.04896Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M19.35 9.33001C19.28 9.33001 19.21 9.32001 19.15 9.30001C17.8504 8.92996 16.6667 8.23424 15.7112 7.27875C14.7558 6.32325 14.06 5.13964 13.69 3.84002C13.6374 3.64779 13.6624 3.44259 13.7597 3.26864C13.857 3.09469 14.0187 2.9659 14.21 2.91003C14.61 2.80003 15.02 3.03003 15.13 3.43003C15.73 5.56002 17.42 7.25002 19.55 7.85002C19.95 7.96002 20.18 8.38002 20.07 8.78001C19.98 9.12001 19.68 9.33001 19.35 9.33001Z',
                                this.cor1
                            )
                        ]
                    };
                return data;
            case 'assignment':
                data =
                    {
                        width: 19,
                        height: 23,
                        components:
                        [
                            Icone.path
                            (
                                'M13.5008 22.25H5.50079C2.48079 22.25 0.750793 20.52 0.750793 17.5V7.74999C0.750793 4.6 2.35079 3 5.50079 3C5.91079 3 6.25079 3.34 6.25079 3.75C6.25066 3.94702 6.28937 4.14213 6.36471 4.32418C6.44004 4.50623 6.55053 4.67164 6.68984 4.81095C6.82915 4.95026 6.99456 5.06075 7.17661 5.13608C7.35866 5.21142 7.55377 5.25013 7.75079 5.25H11.2508C12.0808 5.25 12.7508 4.58 12.7508 3.75C12.7508 3.34 13.0908 3 13.5008 3C16.6508 3 18.2508 4.6 18.2508 7.74999V17.5C18.2508 20.52 16.5208 22.25 13.5008 22.25ZM4.85079 4.52C3.27079 4.65 2.25079 5.36 2.25079 7.74999V17.5C2.25079 19.72 3.28079 20.75 5.50079 20.75H13.5008C15.7208 20.75 16.7508 19.72 16.7508 17.5V7.74999C16.7508 5.36 15.7308 4.66 14.1508 4.52C13.9801 5.15896 13.6034 5.72377 13.0791 6.12693C12.5548 6.53009 11.9122 6.74909 11.2508 6.74999H7.75079C6.95079 6.74999 6.20079 6.43999 5.63079 5.87C5.25079 5.49 4.99079 5.03 4.85079 4.52Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M11.2507 6.74999H7.75072C6.95072 6.74999 6.20072 6.43999 5.63072 5.86999C5.06072 5.29999 4.75072 4.54999 4.75072 3.74999C4.75072 2.1 6.10072 0.75 7.75072 0.75H11.2507C12.0507 0.75 12.8007 1.06 13.3707 1.63C13.9407 2.2 14.2507 2.95 14.2507 3.74999C14.2507 5.39999 12.9007 6.74999 11.2507 6.74999ZM7.75072 2.25C7.45381 2.2493 7.16339 2.33685 6.91634 2.50153C6.66928 2.66621 6.47674 2.90059 6.36315 3.17491C6.24957 3.44923 6.22006 3.75112 6.27838 4.04224C6.3367 4.33337 6.48022 4.60059 6.69072 4.80999C6.97072 5.08999 7.35072 5.24999 7.75072 5.24999H11.2507C11.5476 5.25069 11.838 5.16314 12.0851 4.99846C12.3322 4.83378 12.5247 4.5994 12.6383 4.32508C12.7519 4.05076 12.7814 3.74887 12.7231 3.45774C12.6647 3.16662 12.5212 2.89939 12.3107 2.69C12.0307 2.41 11.6507 2.25 11.2507 2.25H7.75072ZM9.50072 13.25H5.50072C5.09072 13.25 4.75072 12.91 4.75072 12.5C4.75072 12.09 5.09072 11.75 5.50072 11.75H9.50072C9.91072 11.75 10.2507 12.09 10.2507 12.5C10.2507 12.91 9.91072 13.25 9.50072 13.25ZM13.5007 17.25H5.50072C5.09072 17.25 4.75072 16.91 4.75072 16.5C4.75072 16.09 5.09072 15.75 5.50072 15.75H13.5007C13.9107 15.75 14.2507 16.09 14.2507 16.5C14.2507 16.91 13.9107 17.25 13.5007 17.25Z',
                                this.cor1
                            )
                        ]
                    };
                return data;
            case 'backward':
                data =
                    {
                        width: 10,
                        height: 8,
                        components:
                        [
                            Icone.path
                            (
                                'M2.26367 4.75H8.26367C8.67367 4.75 9.01367 4.41 9.01367 4C9.01367 3.59 8.67367 3.25 8.26367 3.25H2.26367C1.85367 3.25 1.51367 3.59 1.51367 4C1.51367 4.41 1.85367 4.75 2.26367 4.75Z',
                                this.cor3
                            ),
                            Icone.path
                            (
                                'M4.26365 7.75C4.45365 7.75 4.64365 7.68 4.79365 7.53C4.93313 7.38886 5.01135 7.19843 5.01135 7C5.01135 6.80157 4.93313 6.61114 4.79365 6.47L2.32365 4L4.79365 1.53C4.93313 1.38886 5.01135 1.19843 5.01135 1C5.01135 0.801572 4.93313 0.61114 4.79365 0.470002C4.50365 0.180002 4.02365 0.180002 3.73365 0.470002L0.73365 3.47C0.44365 3.76 0.44365 4.24 0.73365 4.53L3.73365 7.53C3.88365 7.68 4.07365 7.75 4.26365 7.75Z',
                                this.cor3
                            )
                        ]
                    };
                return data;
            case 'forward':
                data =
                    {
                        width: 10,
                        height: 8,
                        components:
                        [
                            Icone.path
                            (
                                'M7.5 4.75H1.5C1.09 4.75 0.75 4.41 0.75 4C0.75 3.59 1.09 3.25 1.5 3.25H7.5C7.91 3.25 8.25 3.59 8.25 4C8.25 4.41 7.91 4.75 7.5 4.75Z',
                                this.cor3
                            ),
                            Icone.path
                            (
                                'M5.50002 7.75C5.31002 7.75 5.12002 7.68 4.97002 7.53C4.83054 7.38886 4.75232 7.19843 4.75232 7C4.75232 6.80157 4.83054 6.61114 4.97002 6.47L7.44002 4L4.97002 1.53C4.83054 1.38886 4.75232 1.19843 4.75232 1C4.75232 0.801572 4.83054 0.61114 4.97002 0.470002C5.26002 0.180002 5.74002 0.180002 6.03002 0.470002L9.03002 3.47C9.32002 3.76 9.32002 4.24 9.03002 4.53L6.03002 7.53C5.88002 7.68 5.69002 7.75 5.50002 7.75Z',
                                this.cor3
                            )
                        ]
                    };
                return data;
            case 'join_right':
                data = 
                    {
                        width: 23,
                        height: 23,
                        components:
                        [
                            Icone.path
                            (
                                'M14.4996 22.25C14.3674 22.2504 14.2375 22.2156 14.1232 22.1492C14.0089 22.0828 13.9143 21.9871 13.8491 21.8721C13.784 21.7571 13.7506 21.6268 13.7524 21.4946C13.7543 21.3625 13.7913 21.2331 13.8596 21.12L14.9096 19.37C15.1196 19.01 15.5796 18.9 15.9396 19.11C16.2996 19.32 16.4096 19.78 16.1996 20.14L15.9296 20.59C18.6896 19.94 20.7596 17.46 20.7596 14.5C20.7596 14.09 21.0996 13.75 21.5096 13.75C21.9196 13.75 22.2596 14.09 22.2596 14.5C22.2496 18.77 18.7696 22.25 14.4996 22.25ZM1.49957 9.24999C1.08957 9.24999 0.749573 8.90999 0.749573 8.49999C0.749573 4.23 4.22957 0.750003 8.49957 0.750003C8.63176 0.749614 8.76168 0.784405 8.87598 0.850806C8.99029 0.917206 9.08487 1.01283 9.15001 1.12785C9.21516 1.24287 9.24853 1.37316 9.24669 1.50534C9.24486 1.63752 9.20789 1.76683 9.13957 1.88L8.08957 3.63C7.87957 3.99 7.41957 4.1 7.05957 3.89C6.97465 3.83964 6.90053 3.773 6.84146 3.69389C6.78239 3.61479 6.73954 3.52479 6.71538 3.42907C6.69122 3.33334 6.68621 3.23379 6.70066 3.13613C6.71511 3.03847 6.74873 2.94462 6.79957 2.86L7.06957 2.41C4.30957 3.06 2.23957 5.54 2.23957 8.49999C2.2409 8.59801 2.22273 8.69531 2.18614 8.78625C2.14954 8.87719 2.09525 8.95995 2.0264 9.02973C1.95755 9.0995 1.87553 9.15491 1.78509 9.19272C1.69465 9.23053 1.5976 9.25 1.49957 9.24999ZM17.1796 6.99899C17.0496 6.99899 16.9196 6.96899 16.7996 6.89899L12.8296 4.599C12.7441 4.54918 12.6693 4.483 12.6095 4.40424C12.5497 4.32548 12.506 4.23569 12.4809 4.14001C12.4558 4.04434 12.4498 3.94465 12.4633 3.84667C12.4768 3.74868 12.5095 3.65433 12.5596 3.569C12.7696 3.209 13.2296 3.089 13.5796 3.299L17.1796 5.379L20.7496 3.309C21.1096 3.099 21.5696 3.229 21.7696 3.579C21.9796 3.939 21.8496 4.399 21.4996 4.609L17.5496 6.88899C17.4396 6.95899 17.3096 6.99899 17.1796 6.99899Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M17.18 11.2499C16.72 11.2499 16.25 11.1499 15.88 10.9399L13.48 9.60994C12.7 9.17994 12.11 8.16994 12.11 7.27994V4.73994C12.11 3.83995 12.7 2.83995 13.49 2.39995L15.89 1.06995C16.63 0.659951 17.74 0.659951 18.49 1.06995L20.89 2.39995C21.67 2.82995 22.26 3.83995 22.26 4.72994V7.26994C22.26 8.16994 21.67 9.16994 20.89 9.59994L18.49 10.9299C18.1 11.1499 17.64 11.2499 17.18 11.2499ZM16.61 2.36995L14.21 3.69995C13.91 3.86995 13.61 4.37994 13.61 4.71994V7.25994C13.61 7.60994 13.91 8.11994 14.21 8.27994L16.61 9.61994C16.9 9.77994 17.46 9.77994 17.75 9.61994L20.15 8.28994C20.45 8.11994 20.75 7.60994 20.75 7.26994V4.72994C20.75 4.37995 20.45 3.86995 20.15 3.70995L17.75 2.37995C17.46 2.20995 16.89 2.20995 16.61 2.36995ZM5.82104 17.9989C5.69104 17.9989 5.56104 17.9689 5.44104 17.8989L1.47105 15.5989C1.31214 15.493 1.19952 15.3305 1.15604 15.1445C1.11256 14.9585 1.14148 14.763 1.23692 14.5975C1.33237 14.4321 1.48719 14.3091 1.66996 14.2537C1.85274 14.1982 2.04976 14.2144 2.22104 14.2989L5.82104 16.3789L9.39104 14.3089C9.75104 14.0989 10.211 14.2289 10.411 14.5789C10.621 14.9389 10.491 15.3989 10.141 15.6089L6.19104 17.8889C6.08104 17.9589 5.95104 17.9989 5.82104 17.9989Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M5.8205 22.068C5.4105 22.068 5.0705 21.728 5.0705 21.318V17.238C5.0705 16.828 5.4105 16.488 5.8205 16.488C6.2305 16.488 6.5705 16.828 6.5705 17.238V21.318C6.5705 21.738 6.2405 22.068 5.8205 22.068Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M5.81957 22.2499C5.35957 22.2499 4.88957 22.1499 4.51957 21.9399L2.11957 20.6099C1.33957 20.1799 0.749573 19.1699 0.749573 18.28V15.74C0.749573 14.84 1.33957 13.84 2.11957 13.41L4.51957 12.08C5.25957 11.67 6.37957 11.67 7.11957 12.08L9.51957 13.41C10.2996 13.84 10.8896 14.85 10.8896 15.74V18.28C10.8896 19.1799 10.2996 20.1799 9.50957 20.6199L7.10957 21.9499C6.74957 22.1499 6.28957 22.2499 5.81957 22.2499ZM5.24957 13.37L2.84957 14.7C2.54957 14.87 2.24957 15.38 2.24957 15.72V18.2599C2.24957 18.6099 2.54957 19.1199 2.84957 19.2799L5.24957 20.6099C5.53957 20.7699 6.09957 20.7699 6.38957 20.6099L8.78957 19.2799C9.08957 19.1099 9.38957 18.5999 9.38957 18.2599V15.72C9.38957 15.37 9.08957 14.86 8.78957 14.7L6.38957 13.36C6.10957 13.21 5.53957 13.21 5.24957 13.37Z',
                                this.cor1
                            )
                        ]
                    };
                return data;
            case 'reload':
                data =
                    {
                        width: 18,
                        height: 21,
                        components:
                        [
                            Icone.path
                            (
                                '',
                                this.cor3
                            ),
                            Icone.path
                            (
                                '',
                                this.cor3
                            ),
                            Icone.path
                            (
                                '',
                                this.cor3
                            )
                        ]
                    };
                return data;
            case 'search':
                data = 
                    {
                        width: 17,
                        height: 18,
                        components:
                        [
                            Icone.path
                            (
                                'M8.38867 16.3125C4.15117 16.3125 0.701172 12.8625 0.701172 8.625C0.701172 4.3875 4.15117 0.9375 8.38867 0.9375C12.6262 0.9375 16.0762 4.3875 16.0762 8.625C16.0762 12.8625 12.6262 16.3125 8.38867 16.3125ZM8.38867 2.0625C4.76617 2.0625 1.82617 5.01 1.82617 8.625C1.82617 12.24 4.76617 15.1875 8.38867 15.1875C12.0112 15.1875 14.9512 12.24 14.9512 8.625C14.9512 5.01 12.0112 2.0625 8.38867 2.0625ZM16.2637 17.0632C16.1212 17.0632 15.9787 17.0107 15.8662 16.8983L14.3662 15.3983C14.2616 15.2924 14.2029 15.1496 14.2029 15.0007C14.2029 14.8519 14.2616 14.7091 14.3662 14.6033C14.5837 14.3858 14.9437 14.3858 15.1612 14.6033L16.6612 16.1033C16.8787 16.3208 16.8787 16.6807 16.6612 16.8983C16.5487 17.0107 16.4062 17.0632 16.2637 17.0632Z',
                                this.cor1
                            )
                        ]
                    };
                return data;
            case 'user':
                data =
                    {
                        width: 33,
                        height: 37,
                        components:
                        [
                            Icone.path
                            (
                                'M16.5 19.75C11.2167 19.75 6.91668 15.45 6.91668 10.1667C6.91668 4.88337 11.2167 0.583374 16.5 0.583374C21.7834 0.583374 26.0834 4.88337 26.0834 10.1667C26.0834 15.45 21.7834 19.75 16.5 19.75ZM16.5 3.08337C14.6228 3.08778 12.8236 3.83547 11.4962 5.1629C10.1688 6.49033 9.42109 8.28944 9.41668 10.1667C9.42109 12.044 10.1688 13.8431 11.4962 15.1705C12.8236 16.4979 14.6228 17.2456 16.5 17.25C18.3773 17.2456 20.1764 16.4979 21.5038 15.1705C22.8313 13.8431 23.5789 12.044 23.5834 10.1667C23.5789 8.28944 22.8313 6.49033 21.5038 5.1629C20.1764 3.83547 18.3773 3.08778 16.5 3.08337ZM30.8167 36.4167C30.1334 36.4167 29.5667 35.85 29.5667 35.1667C29.5667 29.4167 23.7 24.75 16.5 24.75C9.30002 24.75 3.43335 29.4167 3.43335 35.1667C3.43335 35.85 2.86668 36.4167 2.18335 36.4167C1.50002 36.4167 0.93335 35.85 0.93335 35.1667C0.93335 28.05 7.91668 22.25 16.5 22.25C25.0834 22.25 32.0667 28.05 32.0667 35.1667C32.0667 35.85 31.5 36.4167 30.8167 36.4167Z',
                                this.cor1
                            )
                        ]
                    };
                return data;
            case 'view_timeline':
                data = 
                    {
                        width: 21,
                        height: 23,
                        components:
                        [
                            Icone.path
                            (
                                'M10.5 8.24999C10.4 8.24999 10.31 8.22999 10.21 8.18999C10.0732 8.13407 9.95627 8.03846 9.87428 7.91548C9.7923 7.7925 9.74902 7.64779 9.75002 7.49999V1.5C9.75002 1.09 10.09 0.75 10.5 0.75C10.91 0.75 11.25 1.09 11.25 1.5V5.68999L11.97 4.96999C12.26 4.67999 12.74 4.67999 13.03 4.96999C13.32 5.25999 13.32 5.73999 13.03 6.02999L11.03 8.02999C10.89 8.16999 10.69 8.24999 10.5 8.24999Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M10.501 8.25103C10.311 8.25103 10.121 8.18103 9.971 8.03103L7.971 6.03104C7.83152 5.8899 7.7533 5.69947 7.7533 5.50104C7.7533 5.30261 7.83152 5.11218 7.971 4.97104C8.261 4.68104 8.741 4.68104 9.031 4.97104L11.031 6.97104C11.321 7.26104 11.321 7.74103 11.031 8.03103C10.881 8.18103 10.691 8.25103 10.501 8.25103ZM14.5 22.25H6.5C0.75 22.25 0.75 19.2 0.75 16.5V15.5C0.75 13.27 0.75 10.75 5.5 10.75C6.69 10.75 7.13 11.04 7.75 11.5C7.78 11.53 7.82 11.55 7.85 11.59L8.87 12.67C9.73 13.58 11.29 13.58 12.15 12.67L13.17 11.59C13.2 11.56 13.23 11.53 13.27 11.5C13.89 11.03 14.33 10.75 15.52 10.75C20.27 10.75 20.27 13.27 20.27 15.5V16.5C20.25 20.32 18.32 22.25 14.5 22.25ZM5.5 12.25C2.25 12.25 2.25 13.27 2.25 15.5V16.5C2.25 19.24 2.25 20.75 6.5 20.75H14.5C17.48 20.75 18.75 19.48 18.75 16.5V15.5C18.75 13.27 18.75 12.25 15.5 12.25C14.78 12.25 14.63 12.34 14.2 12.66L13.23 13.69C12.8802 14.0634 12.4573 14.3609 11.9877 14.5639C11.518 14.7669 11.0116 14.8711 10.5 14.87C9.98835 14.8711 9.48196 14.7669 9.0123 14.5639C8.54265 14.3609 8.11978 14.0634 7.77 13.69L6.8 12.66C6.37 12.34 6.22 12.25 5.5 12.25Z',
                                this.cor1
                            ),
                            Icone.path
                            (
                                'M3.50034 12.25C3.09034 12.25 2.75034 11.91 2.75034 11.5V7.50002C2.75034 5.56002 2.75034 3.15002 6.43033 2.80002C6.84033 2.76002 7.21033 3.06002 7.25033 3.48002C7.29033 3.89002 6.99033 4.26002 6.57033 4.30002C4.25034 4.51002 4.25034 5.45002 4.25034 7.50002V11.5C4.25034 11.91 3.91034 12.25 3.50034 12.25ZM17.5013 12.248C17.0913 12.248 16.7513 11.908 16.7513 11.498V7.49802C16.7513 5.44802 16.7513 4.50802 14.4313 4.28802C14.2339 4.26782 14.0525 4.17016 13.9269 4.01646C13.8013 3.86276 13.7418 3.66554 13.7613 3.46802C13.8013 3.05802 14.1613 2.74802 14.5813 2.79802C18.2613 3.14802 18.2613 5.55802 18.2613 7.49802V11.498C18.2562 11.697 18.1741 11.8863 18.0324 12.0261C17.8907 12.166 17.7004 12.2455 17.5013 12.248Z',
                                this.cor1
                            )
                        ]
                    };
                return data;
        }
    }

    static path(d, fill)
    {
        var path;
        path =
            new Svg
            (
                {
                    node: 'path',
                    attributes:
                    {
                        fill: fill,
                        d: d
                    }
                }
            );
        return path;
    }
}

class Logo extends Component
{
    static defaults =
        {
            style:
                {
                    font_family: 'simba',
                    font_size: '30px',
                    color: 'gray',
                }
        };

    constructor(parametros)
    {
        parametros =
            {
                ...Logo.defaults,
                ...{content: Pagina.titulo},
                ...parametros
            };
        super(parametros);
    }
}

class Pagina
{
    static titulo;
    static largura = 1300;
    static altura_cabecalho = 83;
    static cores =
        {
            fundo: '#f4f4f4'
        };
    static cabecalho;
    static header;
    static corpo;

    static home()
    {
        var gap = 20;
        Pagina.corpo.set
        (
            'components',
            [
                new Component
                (
                    {
                        style: 
                        {
                            margin_top: '20px',
                            width: (Pagina.largura - gap) + 'px',
                            display: 'grid',
                            grid_template_columns: '65% 35%',
                            gap: gap + 'px'
                        },
                        components:
                        [
                            new Glass
                            (
                                {
                                    style: 
                                    {
                                        min_height: '200px',
                                        overflow: 'auto',
                                        padding: '25px 80px',
                                        text_align: 'center'
                                    },
                                    parse: true,
                                    components:
                                    [
                                        new Component
                                        (
                                            {
                                                node: 'p',
                                                parse: true,
                                                content: 
                                                    'Você está acessando o ' + 
                                                    '<span style="font-weight: bold; color: ' + styles['text_color_highlight'] + '">' + 
                                                        this.titulo + 
                                                    '</span>' + 
                                                    ', módulo de gestão de ordens judiciais/extrajudiciais',
                                                style: {padding: '10px 0'}
                                            }
                                        ),
                                        new Component
                                        (
                                            {
                                                content: '© 2024 ' + Pagina.titulo + '. Todos os direitos reservados',
                                                style: 
                                                {
                                                    margin_top: '20px',
                                                    color: '#aaa',
                                                    font_style: 'italic',
                                                    font_size: 'small',
                                                    text_align: 'center'
                                                }
                                            }
                                        )
                                    ]
                                }
                            ),
                            
                            new Glass
                            (
                                {
                                    style: 
                                    {
                                        min_height: '200px',
                                        overflow: 'auto',
                                        padding: '0px'
                                    },
                                    icon: 'login',
                                    title: 'Login',
                                    components: 
                                    [
                                        new Component
                                        (
                                            {
                                                style: {padding: '20px'},
                                                components: Autenticacao.formulario()
                                            }
                                        )
                                    ]
                                }
                            )
                        ]
                    }
                )
            ]
        );
    }

    static inicia()
    {
        var icone;
        this.titulo = 'Simba Premium';
        document.title = this.titulo;
        Fonts.add('satoshi-variable', 'fonts/satoshi-variable.ttf');
        Page.body.set
        (
            'style', 
            {
                background_repeat: 'no-repeat',
                background_attachment: 'fixed',
                background_size: '100% 100%',
                min_width: this.largura + 'px',
                font_family: 'satoshi-variable, sans-serif',
                color: styles['text_color_normal'],
                background: Pagina.cores['fundo']
            }
        );
        icone = new Icone();
        icone.setAttribute('onclick', 'alert("' + this.titulo + '");');
        icone.setStyle('cursor', 'pointer');
        this.header = 
            new Header
            (
                {
                    nickname: 'header',
                    logo: icone,
                    style:
                        {
                            margin: 'auto',
                            width: Pagina.largura + 'px',
                            display: 'flex',
                            align_items: 'center',
                            justify_content: 'space-between',
                            height: '80px'
                        }
                }
            );
        this.cabecalho =
            new Component
            (
                {
                    nickname: 'cabecalho',
                    style:
                    {
                        background_color: '#ffffff'
                    },
                    components:
                        [
                            this.header
                        ]
                }
            );
        this.corpo = 
            new Component
            (
                {
                    nickname: 'corpo',
                    style:
                    {
                        width: this.largura + 'px',
                        margin: 'auto',
                        min_height: '100px'
                    }
                }
            );
        Page.body.set
        (
            'components',
            [
                this.cabecalho, 
                this.corpo
            ]
        );
        Pagina.home();
    }
}

class PainelControle
{
    static carrega()
    {
        Pagina.header.set
        (
            'core',
            this.menu()
        );
        Requisicao.carrega();
    }

    static menu()
    {
        var menu;
        menu =
            new Tabsheet
            (
                {
                    background_color: 'transparent',
                    style:
                    {
                        font_size: 'small',
                        margin: 'auto'
                    },
                    items:
                    [
                        Tabsheet.item
                        (
                            'color',
                            {
                                icon: Requisicao.icone(),
                                text: Requisicao.titulo, 
                                onclick: 'Requisicao.carrega();',
                                background_color: '#ffffff'
                            }
                        ),
                        Tabsheet.item
                        (
                            'color',
                                {
                                icon: Conciliacao.icone(), 
                                text: Conciliacao.titulo, 
                                onclick: 'Conciliacao.carrega();',
                                background_color: '#ffffff'
                            }
                        ),
                        Tabsheet.item
                        (
                            'color',
                            {
                                icon: Quarentena.icone(), 
                                text: Quarentena.titulo, 
                                onclick: 'Quarentena.carrega();',
                                background_color: '#ffffff'
                            }
                        ),
                        Tabsheet.item
                        (
                            'color',
                            {
                                icon: Relatorio.icone(), 
                                text: Relatorio.titulo, 
                                onclick: 'Relatorio.carrega();',
                                background_color: '#ffffff'
                            }
                        ),
                        Tabsheet.item
                        (
                            'color',
                                {
                                    icon: CadastroAtendimento.icone(), 
                                    text: CadastroAtendimento.titulo, 
                                    onclick: 'CadastroAtendimento.carrega();',
                                    background_color: '#ffffff'
                                }
                        )
                    ],
                    active: 0,
                    trigger: Tabsheet.trigger('color')
                }
            );
        return menu;
    }
}

class Quarentena
{
    static titulo = 'Quarentena de Casos';
    
    static icone()
    {
        var icone;
        icone = new Icone({type: 'add_to_queue'});
        return icone;
    }

    static carrega()
    {
        Pagina.corpo.set
        (
            'components',
            [
                new Container
                (
                    {
                        parse: true,
                        content: '<b>' + this.titulo + '</b><br><br><i>em construção</i>'
                    }
                )
            ]
        );
    }
}

class Relatorio
{
    static titulo = 'Relatório';
    
    static icone()
    {
        var icone;
        icone = new Icone({type: 'assignment'});
        return icone;
    }

    static carrega()
    {
        Pagina.corpo.set
        (
            'components',
            [
                new Container
                (
                    {
                        parse: true,
                        content: '<b>' + this.titulo + '</b><br><br><i>em construção</i>'
                    }
                )
            ]
        );
    }
}

class Requisicao
{
    static titulo = 'Requisições';

    static menu;

    static banner;

    static tipos =
        [
            'Novas requisições',
            'Requisições em atendimento',
            'Requisições atendidas',
            'Casos em mora',
            'Falsas pendências de atendimento'
        ];

    static icone()
    {
        var icone;
        icone = new Icone({type: 'view_timeline'});
        return icone;
    }
    
    static carrega()
    {
        var i, components, items, item, css_value;
        css_value = '';
        components = [];
        items = [];
        for (i in Requisicao.tipos)
        {
            components.push
            (
                new Glass
                (
                    {
                        nickname: 'item_' + i,
                        style:
                        {
                            text_align: 'center',
                            font_weight: 'bold'
                        },
                        components:
                        [
                            new Component
                            (
                                {
                                    nickname: 'quantidade',
                                    style:
                                    {
                                        color: styles['text_color_highlight'],
                                        font_size: '42px'
                                    }
                                }
                            ),
                            new Component
                            (
                                {
                                    style:
                                    {
                                        color: styles['text_color_normal'],
                                        font_size: '24px'
                                    },
                                    content: Requisicao.tipos[i]
                                }
                            )
                        ]
                    }
                )
            );
            css_value += (css_value ? ' ' : '') + 'auto';
            item = Tabsheet.item('check', {});
            item.set('nickname', 'item_' + i)
            items.push(item);
        }
        this.menu = 
            new Tabsheet
            (
                {
                    items: items,
                    active: 0,
                    style:
                    {
                        margin_bottom: '20px',
                        font_size: 'smaller',
                        font_weight: 'bold'
                    },
                    trigger: Tabsheet.trigger('check')
                }
            );
        this.banner =
            new Component
            (
                {
                    style:
                    {
                        margin_top: '30px',
                        display: 'inline-grid',
                        gap: '20px',
                        grid_template_columns: css_value
                    },
                    components: components
                }
            );
        Pagina.corpo.set
        (
            'components',
            [
                this.banner,
                new Container
                (
                    {
                        components:
                        [
                            this.menu,
                            new Datatable
                            (
                                {
                                    columns: ['Caso', 'Requisição', 'Data Recebimento', 'Ações'],
                                    searchable_columns: [0, 1, 2],
                                    total: 4,
                                    rows:
                                        [
                                            ['002154', '5489654153', '26/08/2024', ''],
                                            ['002237', '7305468700', '12/07/2024', ''],
                                            ['003446', '3475699001', '07/08/2024', ''],
                                            ['002346', '4578697441', '20/08/2024', '']
                                        ]
                                }
                            )
                        ]
                    }
                )
            ]
        );
        // stubs
        this.setContagem(0, 4);
        this.setContagem(1, 125);
        this.setContagem(2, 12563);
        this.setContagem(3, 21);
        this.setContagem(4, 0); 
    }

    static setContagem(indice, quantidade)
    {
        this.banner.getComponent('item_' + indice, 'quantidade').set
        (
            'content',
            Format.number(quantidade)
        );
        this.menu.getComponent('item_' + indice, 'text').set
        (
            'content',
            (
                quantidade ?
                    '(' + Format.number(quantidade) + ') ' 
                :
                    ''
            ) +
            Requisicao.tipos[indice]
        );
    }
}

class Usuario
{
    static autenticado = false;
    
    static nome = '';
    
    static id = null;
    
    static menu;

    static icone()
    {
        var icone;
        icone = new Icone({type: 'user'});
        return icone;
    }

    static ativaMenu(component)
    {
        this.menu =
            new Menu
            (
                {
                    component: component,
                    items:
                        [
                            Menu.defaultItem('Sair', 'Autenticacao.logout()', 'logout')
                        ],
                    vertex: 3,
                    top: false,
                    style:
                        {
                            ...Menu.defaults.style,
                            ...
                            {
                                background_color: '#ffffff'
                            }
                        }
                }
            );
    }

    static destroiMenu()
    {
        this.menu.destroy();
    }
}

Pagina.inicia();