import React from 'react';
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home_imgs" src="https://images2.fanpop.com/image/photos/13500000/Pokemon-pokemon-13597986-1024-768.jpg" alt=""/>

                <div className="home_row">

                    <Product id="1"
                             title="피카츄"
                             price={3000}
                             image="https://mblogthumb-phinf.pstatic.net/20140926_176/redslate_1411741830380j5Kou_PNG/1.png?type=w210"
                             rating={5}/>
                    <Product
                        id="2" title="라이츄"
                        price={3500}
                        image="https://w.namu.la/s/361b8e60346602e023d824afa457dc0a2becda342a1c1f9df40c4fe6479bf5348dad9f38fa4919901881cc7d4e8eba9883200f88948a4027dd2067aa0f70866ab60978e54a04c11eca859c05d76ee37393827659d640b316142b69e33059fb11e6effcf1a3130e447ae48d9b321ba027"
                        rating={5}/>

                    <Product
                        id="3" title="파이리"
                        price={3000}
                        image="https://w.namu.la/s/8385b6fef6043ba467f8502df24c44107e8fc93290eda0d966f474a33d6e4c903784a0d6557e04bcbe696cd870e0cfaca618fa422aafccc23c0c463cf8c85566377eedbacfd4f571e95665ede93d6f3b3906d71f3b9545e29ce47ca8b45f2d1d7cae3f7f1ef38cdb13f6c932e390562b"
                        rating={5}/>

                    <Product
                        id="4" title="꼬부기"
                        price={3000}
                        image="https://ww.namu.la/s/b2dc5e311ec289962916adfcc72479367bfc2764f1f262769468d74441c22c573fcb68dc7c4bd2befb04ad64d388478fd1a985cea20aceeb0db3a5998bf5a378f99ffd891318a6a636e42fae82564191440d67903c2bf5d565e542136f466f13b3f1997367da8063149d7f84519a6511"
                        rating={5}/>

                </div>
                <div className="home_row">
                    <div className="home_row">
                        <Product
                            id="5" title="버터플"
                            price={3200}
                            image="https://w.namu.la/s/8474ad9689f43034ef4cd31af81152b62ba3783f80ffb724ed95ee5f937edbf6e77d3a4590aa9bfbfb5c3f6205b121675aff77b6e5cff504a2e71dc48d282054a5b1bb8120077554b6c4e1fed943aad35c465c9756cb56fac0f94a1a99faed418716dc00804475be5f155cca15f987d5"
                            rating={4}/>
                    </div>

                    <div className="home_row">
                        <Product
                            id="5" title="야도란"
                            price={3000}
                            image="https://w.namu.la/s/e261718d801109a3921361ef8751835e58d1622aa86637ca03f31869cec046cde810733e4bc1928ad7a1cc1c1ec0b5b0a9bc2c034cff0dc6d9a533cd0b086eea4c6139f76af642d3aa208e6103f3d331d11122b3ab58d7373ac8a46fd0718a6a2ad39902df08794aa067e7ca648c9543"
                            rating={3}/>
                    </div>

                    <div className="home_row">
                        <Product
                            id="7" title="피존투"
                            price={3300}
                            image="https://ww.namu.la/s/e9e210b7dd56473f397110f854c60705422b062e3cfe8fe1cfcd9e11f9e497ba7f90381764a10c1e2ab73c354e90f8cbc2ba2a87385dd0cee45503329c88b1f2373640a8e796167d0b80689ab717044f5960a0590f411f0a028649825a4b7dba4cc2c51873acefbc7f5744494df2db54"
                            rating={4}/>
                    </div>

                    <div className="home_row">
                        <Product
                            id="8" title="이브이"
                            price={3000}
                            image="https://w.namu.la/s/cfdb7644478e28c31fc1a36bf3bb7d567c50369071414650bc8b54bd38bb8f828f83d6c825ece60af02d993d9f9ea6bdb3049734f704ec3395895ca7b920f224a1279014e93caa64db0e54a75dfef6fc7c9bbbed1ca686d36dd7f16f27daa56ac14fa23b353405c8661dd03786540d1d"
                            rating={5}/>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Home;