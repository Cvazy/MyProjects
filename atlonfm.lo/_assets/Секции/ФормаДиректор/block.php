    <section class="greet relative overflow-hidden">
        <div class="greet_img absolute top-0 left-1/2 w-full h-full -z-[1] md_only:w-[120%] sm:w-[480px] sm:h-[380px] sm:top-[29.5rem] sm:-translate-x-[50%]">
            <picture>
                <source srcset="/_assets/Секции/ФормаДиректор/b3_redes_bg-mb.jpg" media="(max-width: 680px)" />
                <source srcset="/_assets/Секции/ФормаДиректор/b3_redes_bg-tb.png" media="(max-width: 980px)" />
                <img src="/_assets/Секции/ФормаДиректор/b3_redes_bg.png" class="w-full h-full object-contain object-left-top sm:object-cover" />
            </picture>
            <div class="greet__img-man absolute bottom-0 left-[70px] hidden sm:block">
                <img class="lazy entered loaded" data-src="/_assets/Секции/ФормаДиректор/b5_man.png" alt="" >
            </div>
            <div class="greet_info-box absolute top-[50%] left-[15.625rem] -translate-y-[9.375rem] flex flex-col items-center justify-center w-[20rem] h-[20rem] leading-5 rounded-full bg-white before:absolute before:m-2 before:inset-0 before:border before:border-solid before:border-[#C1C1C1] before:rounded-full opacity-95 xl:w-[15rem] xl:h-[15rem] md:w-[13.875rem] md:h-[13.875rem] md:left-[8.125rem] md:top-[55%] sm:top-[65%] sm:left-[10.5rem]">
                <div class="greet__info-icon absolute top-0 w-[8.5rem] h-[8.5rem] flex items-center justify-center rounded-full bg-[#F0E6E0] -translate-y-[50%] xl:w-[6rem] xl:h-[6rem] md_only:w-[4.375rem] md_only:h-[4.375rem] sm:w-[5.185rem] sm:h-[5.185rem]">
                    <img class="lazy xl:w-[40px] xl:h-[38px] md_only:w-[2rem] md_only:h-[2rem] sm:w-[2.44rem] sm:h-[2.44rem]" data-src="/_assets/Секции/ФормаДиректор/b5_icon.svg" width="65" height="63" alt="">
                </div>
                <div class="greet_info-text text-base text-blacker font-bold text-center xl:text-xs">
                    <p class="mb-5">Я полностью открыт <br> для общения.</p>
                    <p class=""><span class="bg-yellow">Все сообщения читаю сам.</span> <br> Можете написать прямо <br> сейчас.</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="greet_content py-20 max-w-[600px] xl:max-w-[450px] md_only:max-w-[23.75rem] md_only:py-12">
                <div class="greet_text text-white text-xl xl:text-base">
                    <p class="greet_title pb-7 text-4xl font-bold xl:text-2xl md:text-xl">Привет!</p>
                    <div class="greet_text-main">
                        <p class="pb-7 md_only:pb-5">Меня зовут Александр Антипин, <br class="hidden"> я генеральный директор компании Атлон ФМ. <span class="inline md:block md:pt-7">И это самый необычный сайт ремонтной компании, который <br class="hidden"> вы когда-либо видели.</span>
                        </p>
                        <p class="pb-7 md_only:pb-5">Почему?</p>
                    </div>
                    <p class="mb-8 text-2xl font-bold xl:text-xl md_only:mb-5 sm:mb-[450px] sm:text-xl">Потому что только на нашем<br class="sm:hidden"> сайте Вас ждёт...</p>
                    <div class="greet_form max-w-[33.75rem]">
                        <form id="form_1">
                            <div class="form_input"><input type="text" placeholder="Как Вас зовут?" required="" name="name"></div>
                            <div class="form_input">
                                <input x-data="{ mask: null }" x-init="mask = IMask($refs.greetFormPhone, {mask: '+{7} (000) 000-00-00'})" x-ref="greetFormPhone" type="text" placeholder="Ваш номер телефона..." required="" name="phone" im-insert="true">
                            </div>
                            <div class="form_input">
                                <textarea class="h-[7.875rem] md_only:h-[4.375rem]" name="comment" cols="30" rows="10" placeholder="Напишите, какой ремонт вы хотите?"></textarea>
                            </div>
                            <button type="submit" class="btn w-full h-20 after:hidden"><span class="relative w-full text-2xl font-bold z-20 xl:text-xl md:text-lg">Отправить сообщение Александру</span></button>
                            <div class="form_checkbox mt-7">
                                <label>
                                    <input @change="console.log($refs.input.checked);" x-ref="input" type="checkbox" name="check" required="" checked="">
                                    <p>
                                        <i class="w-[1.1875rem] h-[1.1875rem]"></i>
                                        <span class="max-w-[21.875rem]">Нажимая на кнопку “отправить”, вы даёте своё согласие на <a href="#politic-modal" class="text-white" data-fancybox> обработку персональных данных</a></span>
                                    </p>
                                </label>
                            </div>
                            <input type="hidden" name="utm_source" value="">
                            <input type="hidden" name="city" value="Москва">
                            <input type="hidden" name="utm_medium" value="">
                            <input type="hidden" name="utm_campaign" value="">
                            <input type="hidden" name="utm_term" value="">
                            <input type="hidden" name="utm_content" value="">
                            <input type="hidden" name="_ga" value="">
                            <input type="hidden" name="to_director">
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>