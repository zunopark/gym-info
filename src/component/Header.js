// style 에 따라 헤더 스타일을 다르게 주기 위해서
export const Header = (style) => {
    return `<header class="fixed w-full lg:h-[100px] h-[80px] before:content-[''] before:absolute before:bg-gradient-to-b before:from-[rgba(0,0,0,.25)] before:w-full before:h-[120px] z-[100]">
    <div class="container flex items-center justify-between relative h-full mx-auto lg:px-[40px] px-[10px] ease-out duration-300 z-5">
        <h1>
            <a href="index.html" class="block bg-[url('../dist/img/logo.png')] bg-no-repeat bg-center bg-cover lg:w-[80px] w-[60px] lg:h-[80px] h-[60px] text-[0] leading-[0] ease-out duration-300">BELL GROUND GYM</a>
        </h1>
        <nav class="lg:overflow-y-hidden overflow-y-scroll lg:w-fit w-[calc(100%-90px)]">
            <ul class="flex w-fit ml-auto">
                <li class="flex-1"><a href="profile.html" class="lg:px-[15px] px-[7px] lg:text-[20px] text-[16px] text-[#fff] font-medium tracking-tight hover:text-[#006737] whitespace-nowrap ease-out duration-100">인사말</a></li>
                <li class="flex-[0 0 auto] lg:ml-[25px] ml-[12px]"><a href="present.html" class="lg:px-[15px] px-[7px] lg:text-[20px] text-[16px] text-[#fff] font-medium tracking-tight hover:text-[#006737] whitespace-nowrap ease-out duration-100">트레이너 소개</a></li>
                <li class="flex-[0 0 auto] lg:ml-[25px] ml-[12px]"><a href="#" class="lg:px-[15px] px-[7px] lg:text-[20px] text-[16px] text-[#fff] font-medium tracking-tight hover:text-[#006737] whitespace-nowrap ease-out duration-100">시설안내</a></li>
                <li class="flex-[0 0 auto] lg:ml-[25px] ml-[12px]"><a href="#" class="lg:px-[15px] px-[7px] lg:text-[20px] text-[16px] text-[#fff] font-medium tracking-tight hover:text-[#006737] whitespace-nowrap ease-out duration-100">프로그램</a></li>
                <li class="flex-[0 0 auto] lg:ml-[25px] ml-[12px]"><a href="#" class="lg:px-[15px] px-[7px] lg:text-[20px] text-[16px] text-[#fff] font-medium tracking-tight hover:text-[#006737] whitespace-nowrap ease-out duration-100">오시는길</a></li>
            </ul>
        </nav>
    </div>
</header>`
}