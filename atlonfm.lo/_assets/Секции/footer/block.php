<!-- Footer -->
<footer class="bg-custom-black-light py-[30px] px-0 md_only:pt-[30px] md_only:pb-[50px] md_only:relative">
    <div class="container flex relative justify-between sm:flex-col">
        <div>
            <div class="flex gap-[35px] mt-0 mx-0 mb-[35px] md:mb-[20px] sm:flex sm:flex-col">
                <img class="md:w-[140px] md:h-auto" data-src="/_assets/image/header_01/logo.png" width="160" height="52" alt="" data-ll-status="loaded" src="/_assets/image/header_01/logo.png" loading="lazy">
                <div class="pt-[9px] px-0 pb-0 md:absolute md_only:bottom-[-31px] md_only:left-[327px] md:flex gap-[5px] sm:top-[118px]">
                    <p class="text-white text-base !leading-[140%] md:text-sm">ИНН: 7726469525,</p>
                    <p class="text-white text-base !leading-[140%] md:text-sm">ОГРН: 1207700389456</p>
                </div>
            </div>
            <div class="flex flex-col gap-[10px] sm:pb-[50px]">
                <a class="text-base underline text-[#A3A3A3] md:text-sm" href="#">Политика конфиденциальности</a>
                <a class="text-base underline text-[#A3A3A3] md:text-sm" href="#">Оплата</a>
            </div>
        </div>
        <div>
            <div class="flex items-center sm:pt-[72px]">
                <div>
                    <a class="decoration-0" target="_blank" href="https://api.whatsapp.com/send/?phone=+79999977799">
                        <i class="flex w-[60px] h-[60px] border border-solid border-[#ffffff33] rounded-[7px] my-0 ml-0 mr-[15px] md:w-[48px] md:h-[48px] md:mr-[5px]">
                            <img class="m-auto sm:w-[20px]" data-src="/_assets/image/footer_icons/wa.svg" width="34" height="34" alt="img" data-ll-status="loaded" src="/_assets/image/footer_icons/wa.svg" loading="lazy">
                        </i>
                    </a>
                </div>
                <div class="flex sm:m-0 sm:absolute sm:left-[-4px] sm:top-[160px]">
                    <a class="font-bold text-[25px] leading-[140%] text-white my-0 mr-0 ml-[4px] flex items-center decoration-0" href="tel:+74953200086">
                        <i class="flex w-[60px] h-[60px] border justify-center border-solid border-accent rounded-[7px] my-0 ml-0 mr-[13px] md:w-[48px] md:h-[48px] sm:mr-[5px]">
                            <img class="sm:w-[20px]" data-src="/_assets/image/footer_icons/tel.svg" width="34" height="34" alt="img" data-ll-status="loaded" src="/_assets/image/footer_icons/tel.svg" loading="lazy">
                        </i>
                        <div class="sm:pl-[10px]">
                            <a href="tel:+74953200086" class="block text-white font-bold mb-[2.5px] text-2xl xl:text-xl">+7 (495) 320-00-86</a>
                            <button
                                class="block text-accent uppercase border-accent border-solid border-b !leading-[110%] text-base sm:text-sm"
                                @click="isModalShow = true; modalTitle = 'Заказать дизайн-проект'"
                            >Заказать звонок</button>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <p class="text-base !leading-[140%] text-[#A3A3A3] max-w-[314px] w-full mt-[26px] mx-0 mb-0 md:text-sm md:max-w-[280px]">Сайт не является публичной офертой и носит информационный характер</p>
            </div>
        </div>
    </div>
</footer>

<!-- End: Footer -->

<!-- Modals -->
    <div class="">
        <div 
        x-show="isModalShow" 
        x-transition.duration.500ms
        
        class="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-black bg-opacity-50 z-50"
        style="display: none"

        x-init="$watch('isModalShow', value => {
            if (value) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        })"

        x-on:keydown.escape.window="isModalShow = false"
        @click="isModalShow = false"
        >
            <div 
                class="relative bg-popup w-full max-w-lg p-12 rounded-lg md:p-6 sm:p-2"
                @click.stop
                >
                <button 
                    class="absolute top-5 right-5 hover:rotate-180"
                    @click="isModalShow = false"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <h2 class="text-2xl text-gray-800 font-bold mb-5" x-text="modalTitle"></h2>
                <h1 x-text="$store.bodyScrollxxxx"></h1>
                <div class="">                    
                    <form action="" method="POST">
                        <div class="mb-4">
                            <input 
                            class="w-full p-5 rounded-lg border focus:outline-none" 
                            type="text" 
                            placeholder="Как вас зовут?"
                            required=""
                            >
                        </div>
                        <div class="mb-4">
                            <input 
                                class="w-full p-5 rounded-lg border focus:outline-none" 
                                type="tel" 
                                placeholder="Ваш номер телефона..."
                                required=""
                            >
                        </div>
                        <div class="mb-4">
                            <button class="btn btn--submit w-full justify-center" type="submit">Отправить</button>
                        </div>

                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="check" required="" checked="">
                                <p>
                                    <i></i>
                                    <span>Нажимая на кнопку “отправить” вы даёте своё согласие на обработку персональных данных</span>
                                </p>
                            </label>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </div>
    <!-- End:Modals -->

<script src="/_assets/js/before-after.js"></script>
<script src="/_assets/js/lazyload.min.js"></script>
<script src="/_assets/js/filepond.js"></script>
<script src="/_assets/js/fancybox-init.js"></script>
<script src="/_assets/js/swiper-intresting.js"></script>
<script src="/_assets/js/faq-script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<script src="/_assets/js/imask.min.js"></script>
<script src="/_assets/js/app.js?v=1.3"></script>

</body>
</html>