(function () {

    var template = document.getElementById('navigationHbs').innerHTML;

    var context = {
      navItems : [
        {title:'Settings', link:'/settings', icon:'zmdi-settings'},
        {title:'Promocodes', link:'/promocodes', icon:'zmdi-card-giftcard'},
        {title: 'Panels', link: '/panels', icon: 'zmdi-image', subItems: [
                                                                {id: 6, title: 'Themes', link: '/themes', icon: ''},
                                                                {id: 7, title: 'Instances', link: '/instances', icon: ''}
                                                            ]},
        {title: 'Ads', link: '/ads', icon: 'zmdi-book-image'},
        {title: 'VeContact', link: '/contact', icon: 'zmdi-email-open'}
      ]
    }

    var templateScript = Handlebars.compile(template);

    var html = templateScript(context);

    document.getElementById('navigationList').innerHTML = html;

}());