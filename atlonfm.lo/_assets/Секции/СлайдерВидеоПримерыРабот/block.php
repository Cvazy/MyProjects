<section id="examples-section" x-data="{bg: $refs.sectionVideo2.dataset.bgFull}" x-init="
        callback_enter = function(element) {
            console.log('custom enter 2', element);
            $refs.sectionVideo2.style.backgroundImage='url(' + bg + ')';
        };
        
        lazyBgInstance2 = new LazyLoad({
            unobserve_entered: true,
            elements_selector: 'lazy-bg2',
            callback_enter: callback_enter
        });
        $watch('bg', value => {
            console.log('watch bg',$data.bg);
        });
        if (document.documentElement.clientWidth <= 680) {
            bg = $refs.sectionVideo2.dataset.bgM;
        }
        else if (document.documentElement.clientWidth <= 1070) {
            bg = $refs.sectionVideo2.dataset.bgTb;
        }
    " x-ref="sectionVideo2" class="swiper_redes lazy-bg2 pb-30 bg-cover bg-top overflow-hidden" data-bg-full="/_assets/Секции/СлайдерВидеоПримерыРабот/b2_redes_bg.jpg" data-bg-tb="/_assets/Секции/СлайдерВидеоПримерыРабот/b2_redes_bg-tb.jpg" data-bg-m="/_assets/Секции/СлайдерВидеоПримерыРабот/b2_redes_bg-mb.jpg">
    <div class="container">
        <h2 class="pt-20 pb-10 text-4xl text-center text-black md:text-3xl sm:text-[24px]">Оцените видео-примеры наших работ</h2>
        <div class="swiper_redes_box relative pb-22">
            <div class="swiper_video-comment max-w-[920px] xl:w-[690px] my-0 mx-auto overflow-hidden md:max-w-[600px] sm:w-full" x-data="{ swiper: null }" x-init="swiper = new Swiper($refs.swiperVideo_2, { 
                            spaceBetween: 40,
                            autoHeight: true,
                            loop: true,
                            navigation: {
                                nextEl: '.navigation_swiper.video-comment .next',
                                prevEl: '.navigation_swiper.video-comment .prev',
                            },
                        })" x-ref="swiperVideo_2">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a href="https://youtu.be/bB8LA8M1Wv8" data-fancybox class="group flex no-underline" x-init="Fancybox.bind($refs.swiperVideoLink_01, {});" x-ref="swiperVideoLink_01">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/2.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Обзор трёхкомнатной квартиры с котиками и голосовым управлением</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/BC9Zd50PXe0" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/3.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Подробно о дизайнерских решениях в квартире в ЖК Талисман от руководителя отдела дизайна</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/qcO6z424tk4" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/13.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Вот как должен выглядеть топовый ремонт по дизайн-проекту | ЖК Скандинавия</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/xEa7DD2Nqos" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/4.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Обзор двухярусной квартиры площадью 50 м2 с очень грамотным планирование пространства.</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/27jvfryuvEU" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/9.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Обзор ремонта трёхкомнатной квартиры с ремонтом за 750 000 рублей!</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/0o7C6W7gXMo" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/7.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Обзор стильной евродвушки 45 м2 в ЖК Life-Варшавская с дверьми скрытого монтажа.</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/Aw-nPTGgQbg" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/11.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Ремонт в 3х-этажном таунхаусе в КП Лесная Сказка! Ремонт в таунхаусе площадью 156 м2!</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/-FBx54axfQU" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/6.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Обзор ремонта в квартире 90 м2 с неожиданным ноу-хау в ЖК Новочерёмушкинская 17!</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/QcmQ20rpOow" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/8.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Новый интересный обзор мощной трёхкомнатной квартиры площадью 72 м2.</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/ccAra6FU9ds" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/10.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Показываем ремонт в трехкомнатной квартире для семьи с двумя детьми.</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/2hAfQis5a8o" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/12.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Вместительная однушка в ЖК Западный порт площадью 35 м2.</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/quHmzmpcPx8" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/14.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Показываем современный интерьер с нашим дизайном и ремонтом в квартире 74м2!</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/17c5VTfekwY" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/16.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Небольшая квартира - большие возможности. Обзор ремонта и дизайна 37-метрового жилища</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper_redes_slide pt-16 bg-white-08 backdrop-blur-lg rounded-2xl sm:pt-3">
                            <a class="group flex no-underline" href="https://youtu.be/uDyMDRaRYEk" data-fancybox x-init="Fancybox.bind($refs.swiperVideoLink_02, {});" x-ref="swiperVideoLink_02">
                                <div class="swiper_redes_slide_img relative mx-auto">
                                    <div class="video lazy w-[790px] h-[444px] bg-cover bg-center rounded-xl xl:w-[590px] xl:h-[333px] md:w-[500px] md:h-[294px] sm:w-[280px] sm:h-[165px]" data-bg="/_assets/Секции/СлайдерВидеоПримерыРабот/posters/17.jpg"></div>
                                    <div class="icon_play absolute bottom-0 left-[50%] flex w-[120px] h-[120px] bg-white-05 rounded-full -translate-x-[50%] translate-y-[50%] duration-300 group-hover:scale-105 xl:w-[90px] xl:h-[90px] md:w-[120px] md:h-[120px] sm:-bottom-[30%]">
                                        <img class="play_vid lazy m-auto xl:w-[68px] xl:h-[68px] md:w-[90px] md:h-[90px]" data-src="/_assets/image/play2.svg" width="90" height="90" alt="img">
                                    </div>
                                </div>
                            </a>
                            <div class="swiper_redes_slide_text mt-16 pb-9 xl:mt-20 sm:mt-40">
                                <p class="mb-3 text-3xl text-center font-bold md:max-w-[450px] md:mx-auto md:leading-snug sm:text-2xl sm:max-w-[285px]">Как мы превратили небольшую квартиру 44м2 в уютное гнездышко - обзор ремонта от Атлон ФМ</p>
                                <p class="text-xl text-center text-gray-400 md:max-w-[460px] md:mx-auto"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navigation_swiper video-comment">
                <button class="prev btn-slider btn-slider--border absolute w-15 h-15 top-[50%] -translate-y-[50%] rotate-180 before:w-20 before:h-20 md:z-10 md:left-[150px] sm:left-[20px] sm:top-[226px]">
                    <svg class="m-auto" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.419922 21.17L9.58992 12L0.419925 2.83L3.24992 3.7111e-07L15.2499 12L3.24992 24L0.419922 21.17Z" fill="#FFB57B" />
                    </svg>
                </button>
                <button class="next btn-slider btn-slider--border absolute w-15 h-15 before:w-20 before:h-20 top-[50%] right-0 -translate-y-[50%] md:z-10 md:right-[150px] md:left-auto sm:right-[20px] sm:top-[226px]">
                    <svg class="m-auto" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.419922 21.17L9.58992 12L0.419925 2.83L3.24992 3.7111e-07L15.2499 12L3.24992 24L0.419922 21.17Z" fill="#FFB57B" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>