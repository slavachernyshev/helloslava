__NUXT_JSONP__("/posts/2021-07-27-SX", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac){return {data:[{post:{slug:"2021-07-27-SX",description:"В этом посте я рассказываю, как придумал новый термин Security Experience (SX) по аналогии с Developer Experience (DX). Таким образом я запаковал ряд вопросов, связанных с эффективностью работы подразделения кибербезопасности, в некую сущность, которой удобно оперировать в стратегическом планировании, делать метрики и т.д. Фактически речь идёт про удобство использования нормативки, различных тулов и процессов.",title:x,theme:"Security Experience (SX), Security User Experience (SecUX)",ttr:"11 минут",preview:"2021-07-27-SX-03.png",toc:[{id:z,depth:u,text:A},{id:B,depth:u,text:C},{id:D,depth:u,text:E},{id:F,depth:u,text:x},{id:G,depth:u,text:H},{id:I,depth:q,text:J},{id:K,depth:q,text:L},{id:M,depth:q,text:N},{id:O,depth:q,text:P},{id:Q,depth:q,text:R},{id:S,depth:q,text:T},{id:U,depth:q,text:V},{id:W,depth:u,text:X}],body:{type:"root",children:[{type:a,tag:v,props:{id:z},children:[{type:a,tag:e,props:{href:"#%D0%B2%D1%8B%D1%85%D0%BE%D0%B4-%D0%BD%D0%B0-%D1%82%D0%BE%D0%BD%D0%BA%D0%B8%D0%B9-%D0%BB%D1%91%D0%B4",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:"Я не встречал пока (лето 2021) ни в российском, ни в зарубежном сообществах КБ каких-либо исследований по вопросам, которые я сейчас буду рассказывать. Более того, если с термином Security UX еще можно случайно повстречаться где-то на дне интернета, то термин Security Experience (SX) я не встречал ещё нигде. Так что имейте в виду, что мы на протяжении этого поста будем находится на весьма тонком льду, аккуратнее."}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{alt:"Токий лёд",src:"~\u002Fassets\u002Fimages\u002F2021-07-27-SX\u002F2021-07-27-SX-02.png"},children:[]}]},{type:a,tag:v,props:{id:B},children:[{type:a,tag:e,props:{href:"#security-user-experience-security-ux",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:"Есть такая деятельность, как "},{type:a,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FUser_experience",rel:[k,l,m],target:n},children:[{type:b,value:"User Experience"}]},{type:b,value:" (UX) или Опыт взаимодействия, если по-русски. Он теперь у нас везде, где пользователь сталкивается с каким-либо продуктом или сервисом: не важно, покупает ли он что-то на Озоне или сдаёт документы в МФЦ. Если следовать официальным определениям ("},{type:a,tag:e,props:{href:Y,rel:[k,l,m],target:n},children:[{type:b,value:"ISO 9241-210"}]},{type:b,value:"), то это:"}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Восприятие и ответные действия пользователя, возникающие в результате использования и\u002Fили предстоящего использования продукции, системы или услуги"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Короче, насколько пользователь кайфует, когда тыкает палкой результаты вашей бизнес-деятельности. Если смотреть через призму кибербезопасности, то таких точек взаимодействия у нас возникает две."}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{alt:"Две точки UX в кибербезопасности",src:"~\u002Fassets\u002Fimages\u002F2021-07-27-SX\u002F2021-07-27-SX-01.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Во-первых, это точка взаимодействия клиента с компанией во время выполнения действий, связанных с безопасностью: сложные пароли, процедура получения ключей для двуфакторной аутентификации, нотификации о подозрительных действия под учетной записью и т.д. Во-вторых, это точка взаимодействия работников компании с кибербезопасностью."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Первая точка имеет достаточно очевидные механизмы улучшения этого UX ("},{type:a,tag:e,props:{href:"https:\u002F\u002Fuxdesign.cc\u002Fhow-good-ux-leads-to-great-security-293327c83a90",rel:[k,l,m],target:n},children:[{type:b,value:"вот"}]},{type:b,value:", например, рассуждают, как за счёт UX можно даже безопасность повысить). К сожалению того же самого не скажешь о второй точке. Особенно учитывая, что как раз вокруг неё у нас и развивается токсичная культура кибербезопасности. О токсичной культуре можно почитать "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.csoonline.com\u002Farticle\u002F3434520\u002F5-signs-your-security-culture-is-toxic-and-5-ways-to-fix-it.html",rel:[k,l,m],target:n},children:[{type:b,value:y}]},{type:b,value:" и "},{type:a,tag:e,props:{href:"https:\u002F\u002Fventurebeat.com\u002F2017\u002F11\u002F11\u002Fwhy-cybersecurity-workers-are-some-of-the-hardest-to-retain\u002F",rel:[k,l,m],target:n},children:[{type:b,value:y}]},{type:b,value:", а также помедитировать над прогнозом Forrester на 2021 год:"}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:o,props:{},children:[{type:b,value:"A CISO from a Global 500 firm will be fired for instilling a toxic security culture:"}]},{type:b,value:" Toxic security team culture harms employee retention and hinders recruiting. 2021 will be a year of reckoning for leaders who create, tolerate, or ignore hostile cultures."}]}]},{type:a,tag:w,props:{label:Z},children:[{type:b,value:"Директора по ИБ компаний из Global 500 будут уволены за привитие токсичной культуры безопасности: токсичная культура команды безопасности вредит удержанию работников и препятствует найму. 2021 год станет годом расплаты для лидеров, которые создают, терпят или игнорируют враждебные культуры"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Итак, отложим на подкорке, что у нас есть Security UX (SecUX), состоящий из двух компонент и пойдём дальше. Я специально рассказал немножко о нём, чтобы мы чётко понимали, что об этом речи дальше не будет. Когда-нибудь я отдельно рассмотрю эти вопросы, благо есть, что сказать."}]},{type:a,tag:v,props:{id:D},children:[{type:a,tag:e,props:{href:"#developer-experience-dx",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:E}]},{type:a,tag:c,props:{},children:[{type:b,value:"Есть такие роли\u002Fкоманды в компаниях-разработчиках, как DX (Developer eXperience). Боб Расселман и Мэттью Броберг из RedHat так "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.redhat.com\u002Farchitect\u002Fdeveloper-experience",rel:[k,l,m],target:n},children:[{type:b,value:"описали"}]},{type:b,value:", что же это такое:"}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Developer experience describes the interactions and feelings that a developer has when working with a body of code in order to meet a specific objective. You can think of developer experience as the user experience specifically for programmers."}]}]},{type:a,tag:w,props:{label:Z},children:[{type:b,value:"DX описывает взаимодействие и чувства, которые разработчик испытывает, когда работает с исходным кодом в попытке достичь какой-то конкретной цели. Вы можете представить, что это аналог пользовательского опыта, но для программистов."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Они отметили, что это штука важная, так как в каких-то компаниях процессы разработки легки и непринужденны, а где-то — путь через минное поле. То есть хороший DX позволяет разработчику встать и сделать свою работу с минимальными проблемами, а плохой — отправляет на вечную битву добра и нейтралитета (\""},{type:a,tag:"em",props:{},children:[{type:b,value:"neverending battle trying to figure out what the code is supposed to do and then actually getting it to work"}]},{type:b,value:"\"). Ясно, что второй вариант выливается в лишние издержки, время и, в принципе, программист вообще может однажды сказать «до свидания, я ухожу."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Как человек, считающий, что мир разработки сейчас флагман в инновациях организации эффективных процессов, я побежал в интернет за "},{type:a,tag:o,props:{},children:[{type:b,value:"Security eXperience"}]},{type:b,value:". Но его там не оказалось, ни в поиске, ни в англоязычном твиттер-сообществе КБ. Так что, попытаюсь самостоятельно немного приземлить этот термин."}]},{type:a,tag:v,props:{id:F},children:[{type:a,tag:e,props:{href:"#security-experience-sx",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Итак, SX описывает взаимодействие (и чувства, возникающие от такого взаимодействия) человека занимающегося кибербезопасностью в компании с нормативной базой, используемыми инструментами и процессами обеспечения кибербезопасности. Если перерисовать предыдущую схему, то место SX следующее:"}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{alt:"Место SX",src:"~\u002Fassets\u002Fimages\u002F2021-07-27-SX\u002F2021-07-27-SX-04.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:_},{type:a,tag:o,props:{},children:[{type:b,value:"хорошего"}]},{type:b,value:$}]},{type:a,tag:s,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"изменения\u002Fпроекты компании быстро проходят шлюзы кибербезопасности, так как нет внутренних задержек (определить требования, выбрать защитные меры, да даже просто добавить новое правило на межсетевом экране),"}]},{type:a,tag:d,props:{},children:[{type:b,value:"прозрачная цепочка от определения рисков до выбора защитных мер и области приложения мониторинга,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"законодательные меры органично вписаны в систему кибербезопасности компании и не стоят особняком,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"поиск в документах кибербезопасности прост и эффективен,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"ясно и понятно, какие и как уязвимости закрывать (особенно, когда их у вас десятки и сотни тысяч),"}]},{type:a,tag:d,props:{},children:[{type:b,value:"кибербезопасность интегрирована в разработку (DevSecOps) и т.д."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:_},{type:a,tag:o,props:{},children:[{type:b,value:"плохого"}]},{type:b,value:$}]},{type:a,tag:s,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"захлёбываемся в бизнес-изменениях (business change),"}]},{type:a,tag:d,props:{},children:[{type:b,value:"захлёбываемся в выполнении того, чем сами себя вместе со ФСТЭК нагрузили (run),"}]},{type:a,tag:d,props:{},children:[{type:b,value:"захлёбываемся своими задачами по изменению архитектуры\u002Fпроцессов КБ (change),"}]},{type:a,tag:d,props:{},children:[{type:b,value:"возникают вопросы: \"а зачем мы вообще это делаем?\", \"как наши риски связаны с нашими действиями?\","}]},{type:a,tag:d,props:{},children:[{type:b,value:"не можем ничего найти в своих же документах,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"на почти любой аудиторский запрос уходит большое количество времени,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"постоянная загрузка однотипными задачами и т.д."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Итак, делаем очевидный вывод, что SX существует и должен быть областью постоянного приложения наших сил, так как плохой SX нам не нужен, а хороший нужен."}]},{type:a,tag:w,props:{},children:[{type:b,value:"Более того, плохой SX является одной из основных тормозящих сил на пути к светлому будущему (гасит стратегический импульс). А когда приходит комбинация плохого SX вместе с необходимостью увеличения пропускной способности кибербезопасности (change\u002Frun задач становится больше), то вот тут-то и начинается "},{type:a,tag:e,props:{href:"https:\u002F\u002Fru.wikipedia.org\u002Fwiki\u002F%D0%98%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%88%D1%82%D0%BE%D1%80%D0%BC"},children:[{type:b,value:"идеальный шторм"}]},{type:b,value:" — ситуация, возникшая путём такого сложения ряда неблагоприятных факторов, в результате которого их суммарный негативный эффект существенно возрастает."}]},{type:a,tag:v,props:{id:G},children:[{type:a,tag:e,props:{href:"#%D0%BA%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%B9-sx",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:H}]},{type:a,tag:c,props:{},children:[{type:b,value:"К сожалению, пока никакие умные дяди (ISO, NIST, SANS и т.д.) руководства нам именно по кибербезопасности не выдали (помните, я говорил вначале про тонкий лёд?)."}]},{type:a,tag:w,props:{},children:[{type:b,value:"Есть упомянутый выше стандарт "},{type:a,tag:e,props:{href:Y},children:[{type:b,value:"ГОСТ Р ИСО 9241-210 2012"}]},{type:b,value:" «Эргономика взаимодействия человек-система. Человеко-ориентированное проектирование интерактивных систем» (несколько новее "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.iso.org\u002Fstandard\u002F77520.html"},children:[{type:b,value:"версия"}]},{type:b,value:" у буржуев, но за деньги). Что-то можно попытаться вытащить из них и адаптировать под кибербезопасность."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Так что придётся действовать согласно здравому смыслу и методом аналогий. Открываем Jesse James Garrett \""},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.amazon.com\u002FElements-User-Experience-User-Centered-Design\u002Fdp\u002F0735712026",rel:[k,l,m],target:n},children:[{type:b,value:"The Elements of User Experience: User-Centered Design for the Web"}]},{type:b,value:"\". Там весь процесс проектирования хорошего UX разделен на пять уровней (5 S's of UX)."}]},{type:a,tag:w,props:{},children:[{type:b,value:"С описанием уровней и тем, что они не обязательно выполняются друг за другом, а возможна обратная связь (когда на каждом следующем уровне вы можете получить инсайт о том, что вы всё делали неправильно) можно почитать в русской "},{type:a,tag:e,props:{href:"https:\u002F\u002Fru.wikipedia.org\u002Fwiki\u002F%D0%9E%D0%BF%D1%8B%D1%82_%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F"},children:[{type:b,value:"википедии"}]},{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{alt:"5 S's of UX",src:"~\u002Fassets\u002Fimages\u002F2021-07-27-SX\u002F2021-07-27-SX-03.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ну, свечки поставили, иконами обложились и давайте попробуем на чём-нибудь очевидном, чтобы просто протестировать модель. Этим очевидным будет наша документация по кибербезопасности."}]},{type:a,tag:t,props:{id:I},children:[{type:a,tag:e,props:{href:"#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D0%B8%D0%BB%D1%8B",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:"Я видел варианты от нескольких десятков гигабайт (и плакал) до \"ну мы выбрали путь, чтобы у нас её не было\" (привет, компаниям-разработчикам софта). Эти граничные варианты ужасны с какой стороны на них не посмотри. А еще можно вспомнить отваливающийся "},{type:a,tag:e,props:{href:"https:\u002F\u002Fcbr.ru\u002Fstatichtml\u002Ffile\u002F59420\u002Fst20.pdf",rel:[k,l,m],target:n},children:[{type:b,value:"РС БР ИББС-2.0-2007"}]},{type:b,value:" «Методические рекомендации по документации в области обеспечения информационной безопасности в соответствии с требованиями СТО БР ИББС-1.0» с его 4 уровнями иерархиями и вот таким ужасом:"}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{alt:"Ужасы из РС БР ИББС",src:"~\u002Fassets\u002Fimages\u002F2021-07-27-SX\u002F2021-07-27-SX-05.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Крайние случаи мы рассматривать, конечно, не будем, так как не особо интересно. Итак, у нас есть что-то среднее:"}]},{type:a,tag:s,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"политика КБ,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"политики нескольких процессов (инциденты, риски, классификация, уязвимости, сетевая безопасность, эндпоинты, доступ, персональные данные),"}]},{type:a,tag:d,props:{},children:[{type:b,value:"какой-то набор отдельных процедур и стандартов (СКЗИ здесь и СКЗИ там, харденинг операционных систем, передача конфиденциальной информации и т.д.)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Все эти документы присутствуют в их самом типовом виде: набор пунктов с отдельными требованиями или описаниями действий."}]},{type:a,tag:t,props:{id:K},children:[{type:a,tag:e,props:{href:"#%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-%D1%82%D0%BE%D1%87%D0%B5%D0%BA-sx",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:"Пользователи наших документов:"}]},{type:a,tag:s,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"в первую очередь, мы сами (в основном чтобы кого-то из бизнеса ткнуть, что он дёрнулся в какую-то не ту сторону)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"во вторую очередь, работники нашей компании (когда открывают их при устройстве на работу, закрывают и забывают)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"в третью очередь, аудиторы"}]},{type:a,tag:d,props:{},children:[{type:b,value:"и в последнюю очередь, надзорные органы."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Остальные чайки, которые прилетают раз в тысячелетие, нас особо не волнуют."}]},{type:a,tag:t,props:{id:M},children:[{type:a,tag:e,props:{href:"#1-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D0%B5%D0%BC-%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%8E-sx",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:N}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:o,props:{},children:[{type:b,value:"Уровень стратегии"}]},{type:b,value:" — это самый высокий и наиболее абстрактный уровень представленной модели. На этом уровне необходимо получить ответы на вопросы, касающиеся желаний и ожиданий относительно будущего программного продукта, как со стороны потенциальных пользователей, так и заказчика. Ответы на эти вопросы будут сформированы и представлены в виде конкретного списка на уровне набора возможностей."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Будем использовать тут стандартную нотацию пользовательских историй ("},{type:a,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FUser_story",rel:[k,l,m],target:n},children:[{type:b,value:"User story"}]},{type:b,value:"):"}]},{type:a,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:a,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:a,tag:"code",props:{},children:[{type:b,value:"Как \u003Cроль\u003E, я могу \u003Cвозможность\u003E, чтобы \u003Cвыгода\u003E\n"}]}]}]},{type:a,tag:s,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Как работники кибербезопасности, мы бы хотели легко и просто находить нужные требования и процедуры, чтобы быстро понимать, как выполнить наши задачи"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Как работники кибербезопасности, мы бы хотели исчерпывающую документацию, чтобы аудиторы и надзорные органы не придирались"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Как работники компании, мы бы хотели ясные и короткие инструкции, чтобы мы не нарушали требования из-за незнания или непонимания"}]},{type:a,tag:d,props:{},children:[{type:b,value:aa}]}]},{type:a,tag:t,props:{id:O},children:[{type:a,tag:e,props:{href:"#2-%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D0%B8%D0%BC-%D0%BD%D0%B0-%D1%83%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C-%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:P}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:o,props:{},children:[{type:b,value:"Уровень возможностей"}]},{type:b,value:" представляет из себя простое перечисление набора функциональных возможностей, которые будут доступны для пользователей. Способ реализации и взаимной организации этих возможностей будет описан детальнее уже на уровне структуры."}]}]},{type:a,tag:s,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"должен быть поиск по всей документации"}]},{type:a,tag:d,props:{},children:[{type:b,value:"должна легко извлекаться конкретная мера кибербезопасности со всем её окружением (требования, процедуры и т.д.)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"должны быть выжимки из документа (аннотации, либретто, обзоры) для различных типов пользователей документов"}]}]},{type:a,tag:w,props:{label:"Лирическое отступление"},children:[{type:a,tag:c,props:{},children:[{type:a,tag:"b",props:{},children:[{type:b,value:"Либретто: Притча о блудном сыне."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Два брата — хороший парень, плохой парень. Плохой — гуляка, валит из дома, проматывает папашины бабки, возвращается, поджав хвост. Папаша и говорит: Эй, все нормально, давай гулянку устроим! Тогда хороший сынок говорит: Что еще за дела? Я тут вкалываю до седьмого пота, а он на гулянку явился? Папаша: Не дергайся, это мой сын, он вернулся. У нас в семье все любят друг дружку»"}]},{type:a,tag:c,props:{},children:[{type:a,tag:"i",props:{},children:[{type:b,value:"— «Господь — мой брокер», Кристофер Бакли и Джон Тирни"}]}]}]},{type:a,tag:s,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"должен быть унифицированный подход к составу и содержанию документации"}]},{type:a,tag:d,props:{},children:[{type:b,value:aa}]}]},{type:a,tag:t,props:{id:Q},children:[{type:a,tag:e,props:{href:"#3-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D0%B5%D0%BC-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%83",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:R}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"На "},{type:a,tag:o,props:{},children:[{type:b,value:"уровне структуры"}]},{type:b,value:" описывается взаимное расположение страниц веб-сайта, программных форм, окон и др. То есть он отвечает на вопросы «откуда», «куда» и «как» сможет перемещаться пользователь. Эффективная структура облегчает навигацию и делает её интуитивно понятной для пользователей."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Будем использовать в качестве Golden Source электронный справочник (например, Confluence или что-то другое wiki-подобное с хорошим поиском). Все требования и процедуры оформим отдельными сущностями и составим из них базы данных. Проведем соответствие каждого комплайенс требования с соответствующими записями в БД требований и процедур. Таким образом сможем сами отследить, что и как у нас с комплайенсом, а также со скоростью света отвечать на запросы. Ну и оформим \"либретто\" для каждого набора типовых пользовательских задач (для этого, кстати, неплохо бы провести предварительное исследование, чтобы выявить \"боли\" работников)."}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{alt:ab,src:"~\u002Fassets\u002Fimages\u002F2021-07-27-SX\u002F2021-07-27-SX-06.png"},children:[]}]},{type:a,tag:t,props:{id:S},children:[{type:a,tag:e,props:{href:"#4-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D1%83%D0%B5%D0%BC",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:T}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Под поверхностью находится "},{type:a,tag:o,props:{},children:[{type:b,value:"уровень компоновки"}]},{type:b,value:", представляющей конкретную реализацию абстрактной структуры продукта. На этом уровне решаются вопросы наиболее эффективного расположения различных элементов UI."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Описываем, как структурно и содержательно должен выглядеть документ, чтобы хорошо работали поиск и интеграции. Как наши базы требований и процедур должны выглядеть и как они должны быть интегрированы в документы. Например, можно прийти к такому виду:"}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{alt:"Компоновка",src:"~\u002Fassets\u002Fimages\u002F2021-07-27-SX\u002F2021-07-27-SX-07.png"},children:[]}]},{type:a,tag:t,props:{id:U},children:[{type:a,tag:e,props:{href:"#5-%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D1%83%D0%B5%D0%BC-%D0%BF%D0%BE%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:V}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:o,props:{},children:[{type:b,value:"Уровень поверхности"}]},{type:b,value:" представляет собой внешний вид продукта с точки зрения конечного пользователя, то есть набор текста, картинок, ссылок, форм, вкладок, кнопок и прочего."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Тут уже слишком личное."}]},{type:a,tag:v,props:{id:W},children:[{type:a,tag:e,props:{href:"#%D0%B8%D1%82%D0%BE%D0%B3%D0%BE",ariaHidden:f,tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:X}]},{type:a,tag:c,props:{},children:[{type:b,value:"В принципе, по методике пробежались. Всё это время меня не оставляла мысль, что многовато стадий до окончательного решения. Но, возможно, дело в том, что ситуация рассмотрена не очень конкретная, да и с очевидными наборами решений. Можно применять, короче. Кстати, весьма полезным нахожу адаптацию практик DX (вот "},{type:a,tag:e,props:{href:"https:\u002F\u002Fdeveloperexperience.io\u002F",rel:[k,l,m],target:n},children:[{type:b,value:y}]},{type:b,value:" есть огромная пачка)."}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002F2021-07-27-SX",extension:".md",createdAt:"2021-07-30T20:27:49.279Z",updatedAt:ac},prev:null,next:{slug:"2021-07-29-CC",title:"Связность (coupling) и сплоченность (cohesion)",theme:ab,createdAt:ac}}],fetch:{},mutations:void 0}}("element","text","p","li","a","true",-1,"span","icon","icon-link","nofollow","noopener","noreferrer","_blank","strong","blockquote",3,"content-img","ul","h3",2,"h2","note","Security Experience (SX)","тут","выход-на-тонкий-лёд","Выход на тонкий лёд","security-user-experience-security-ux","Security User Experience (Security UX)","developer-experience-dx","Developer Experience (DX)","security-experience-sx","как-сделать-хороший-sx","Как сделать хороший SX?","объект-приложения-силы","Объект приложения силы","идентификация-точек-sx","Идентификация точек SX","1-определяем-стратегию-sx","1. Определяем стратегию SX","2-переходим-на-уровень-возможностей","2. Переходим на уровень возможностей","3-определяем-структуру","3. Определяем структуру","4-компонуем","4. Компонуем","5-формируем-поверхность-взаимодействия","5. Формируем поверхность взаимодействия","итого","Итого","http:\u002F\u002Fstandard.gost.ru\u002Fwps\u002Fwcm\u002Fconnect\u002Fd661e080413f5db8a4e9fe7ab9890bef\u002FGOST_R_ISO_9241-210-2012.pdf?MOD=AJPERES&usg=AFQjCNF5VrRyTUUJeT4fxrirAxYGCwKnwg&sig2=0JT9e5SMzpYUSHMhu-7yxA&bvm=bv.122448493,d.bGs","вольный перевод","Черты "," SX:","и т.д.","Структура","2021-07-30T20:27:49.280Z")));