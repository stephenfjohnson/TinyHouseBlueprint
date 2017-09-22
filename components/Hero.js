// import animateBlueprint from '../lib/animateBlueprint'
import styled from 'styled-components'

const Hero = styled.section`
  height: 600px;
  background-color: #269;
  background-image: linear-gradient(rgba(255, 255, 255, 0.4), transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.4), transparent 2px), linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  position: relative;
`

const TitleWrap = styled.div`
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  color: #FFF;
  font-family: 'lunar_eclipse', sans-serif;
  // font-family: 'Montserrat Subrayada', sans-serif;
  font-size: 100px;
  font-weight: 300;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  // margin-top: -150px;
  margin: 0;
`

const SubTitle = styled.h2`
  color: #FFF;
  font-weight: 400;
  font-size: 46px;
  margin: 0;
`

const Blueprint = styled.svg`
  .cls-11, .cls-14, .cls-16, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9 {
    fill: none;
    stroke: #fff;
  }
  .cls-14, .cls-16, .cls-4, .cls-6, .cls-7, .cls-8, .cls-11 {
    stroke-dasharray: 3 2;
  }
  .cls-14, .cls-5, .cls-3, .cls-4, .cls-11, .cls-6, .cls-7, .cls-8, .cls-9, .cls-16 {
    stroke-width: 0.5px;
  }
  .cls-13, .cls-15, .cls-10, .cls-12  {
    font-size: 10px;
  }
  .cls-10, .cls-15 {
    fill: #fff;
  }
`

export default () => (
  <Hero>
    <TitleWrap>
      <Title>Tiny House Blueprints</Title>
      <SubTitle>Inspiration & Designs for Free</SubTitle>
    </TitleWrap>
    <Blueprint id="blueprint" viewBox="200 450 900 400" width="100%">
    	<path className="cls-2" d="M888.4 548h6.6v219.3h-6.6z"/>
    	<path className="cls-2" d="M477 761h418v6.3H477z"/>
    	<path className="cls-3" d="M477 761h411.8M888.8 554v207M477 548v219.3"/>
    	<path className="cls-4" d="M468 773.4h432.5M486.2 755.2h396M468 542.7h432.6M486.2 561h396M468 542.7v230.7M882.3 561V755M900.5 542.7v230.7M486.2 561V755M772.5 645.3H800v24.5h-27.5zM563.4 645.4h27.4V670h-27.4zM466.3 645.4h27.4V670h-27.4z"/>
    	<path className="cls-2" d="M893 548.3l-.2 5.5H477.2v-5.6h416z"/>
    	<path className="cls-3" d="M476.8 548h418l.2 219.3H477M477 554h412"/>
    	<path className="cls-3" d="M672.3 763.7l.3-215.8h4.6v215.7h-5zM890.4 548h4.6v219.3h-4.6z"/>
    	<path className="cls-3" d="M672.6 548H895v4.5H672.6zM672.3 762.7H895v4.6H672.3zM477 640h4.7V674H477zM477 742.8h4.6v18.6H477zM477 554.2h4.6v16.5H477zM708.6 622h7.5v32h-7.4z"/>
    	<path className="cls-3" d="M701.2 622h7.5v32h-7.5zM693.7 622h7.5v32h-7.5z"/>
    	<path className="cls-3" d="M686.3 622h7.5v32h-7.5zM678.8 622h7.5v32h-7.5z"/>
    	<path className="cls-3" d="M671.4 622h7.5v32h-7.6z"/>
    	<path className="cls-3" d="M664 622h7.4v32H664zM656.4 622h7.5v32h-7.6z"/>
    	<path className="cls-3" d="M649 622h7.5v32H649zM641.5 622h7.5v32h-7.5zM634 622h7.5v32H634z"/>
    	<path className="cls-3" d="M626.6 622h7.5v32h-7.4zM716 622h7.6v32H716z"/>
    	<path className="cls-5" d="M675 589a22 22 0 0 0 22-22"/>
    	<path className="cls-2" d="M672 566h6v23.5h-6z"/>
    	<path className="cls-3" d="M673.7 566h22.7v1h-22.7z"/>
    	<path className="cls-2" d="M890.6 551.4h4v3.3h-4zM673 551.3h4v3.3h-4zM890.6 761.7h4v3.3h-4zM672.8 761.4h4v3.3h-4z"/>
    	<path className="cls-6" d="M481.7 674l60.8 69M481.7 743l60.8-69M481.7 570.6h60.8v69h-60.8zM481.7 673h60.8v69h-60.8zM481.7 570.6l60.8 69M481.7 639.6l60.8-69"/>
    	<path className="cls-7" d="M477 655.5h199.8v4.2H477z"/>
    	<path className="cls-7" d="M672 655.5h222.3v4.2H672z"/>
    	<path className="cls-3" d="M574.4 655h5.3v5.3h-5.3zM574.4 655l5.4 5.3M574.4 660.3l5.4-5.3M783.3 655h5.3v5.4h-5.3zM783.3 655l5.3 5.4M783.3 660.4l5.3-5.3M772 762.8h27.5v4.5H772z"/>
    	<path className="cls-3" d="M772 764.5h27.5v1.2H772zM890.4 684.8h4.5v27.4h-4.6z"/>
    	<path className="cls-3" d="M892 684.8h1.2v27.4H892zM890.5 603h4.5v27.3h-4.5z"/>
    	<path className="cls-3" d="M892 603h1.3v27.3H892zM771.7 547.4H799v4.5h-27.3z"/>
    	<path className="cls-3" d="M771.7 549H799v1.3h-27.3z"/>
    	<path className="cls-8" d="M895 767.3v9.5H672.3v-9.5M895 548v-9.5H672.6v9.4"/>
    	<path className="cls-9" d="M799.5 509.6H895M799.5 504.3v42M895 504.3V537"/>
    	<path className="cls-3" d="M796.2 513l6.5-6.7M892 512.7l6.5-6.6"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 665.66 434.02)">
    		<tspan x="2.5" y="0"/>
    		<tspan x="4.9" y="0"/>
    		<tspan x="7.3" y="0"/>
    		<tspan x="9.8" y="0"/>
    		<tspan x="12.3" y="0"/>
    		<tspan x="14.7" y="0"/>
    		<tspan x="17.2" y="0"/>
    		<tspan x="19.6" y="0">4</tspan>
    		<tspan x="25.6" y="0">6</tspan>
    		<tspan x="31.9" y="0">'</tspan>
    		<tspan x="34.1" y="0">-</tspan>
    		<tspan x="37.9" y="0"/>
    		<tspan x="40.3" y="0">0</tspan>
    		<tspan x="47.3" y="0">"</tspan>
    	</text>
    	<path className="cls-9" d="M477 430.6v127M895 431v20.4"/>
    	<path className="cls-3" d="M473.7 439.5l6.6-6.5M892 439.3l6.5-6.5"/>
    	<path className="cls-9" d="M673 473h222.3M672.6 467.6v78.8M895 439.8v94.6"/>
    	<path className="cls-3" d="M669.4 476.2l6.5-6.6M892 476.4l6.6-6.5"/>
    	<path className="cls-9" d="M786 490.6h109M786 485.2v166.3M895 485.2V534"/>
    	<path className="cls-3" d="M782.8 493.8l6.6-6.5M892 493.6l6.5-6.5"/>
    	<path className="cls-9" d="M350 767.7V548M426.7 742.6h48.7M345.2 547.6h129.2"/>
    	<path className="cls-3" d="M435.2 746l-6.5-6.6M353 551l-6.5-6.6"/>
    	<path className="cls-9" d="M432 640v-69.4M426.7 640h48.7"/>
    	<path className="cls-3" d="M435.2 643.2l-6.5-6.6M435 573.5l-6.5-6.5"/>
    	<path className="cls-2" d="M482.3 548h2.6v6.2h-2.7zM477.7 761.5h5.4v2.6h-5.3z"/>
    	<path className="cls-9" d="M405.3 808.3v-65.7M399.2 742.6H426"/>
    	<path className="cls-3" d="M408.5 770.6L402 764M408.4 745.8l-6.6-6.5"/>
    	<path className="cls-9" d="M432 742.7v-68.5M426.7 674.2h48.8"/>
    	<path className="cls-3" d="M435 677.3l-6.5-6.5"/>
    	<path className="cls-9" d="M426.7 570.7h48.8M343.7 767.3h134"/>
    	<path className="cls-3" d="M353 770.6l-6.6-6.5"/>
    	<path className="cls-9" d="M377.4 657.3V547.6M369 657.6h105"/>
    	<path className="cls-3" d="M380.6 660.6L374 654M380.4 550.6L374 544"/>
    	<path className="cls-9" d="M404.8 570.7v-64M399.5 570.7h27.2"/>
    	<path className="cls-3" d="M408 574l-6.5-6.6M408 551l-6.7-6.7"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 774.88 469.67)">24'- 0"</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 836.45 507.33)">10'- 6"</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 348.19 669.75)">24'- 0"</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 374.85 614.42)">12'- 0"</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 402.41 538.68)">2'-10 1/2"</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 429.36 726.63)">8'- 3 "R.O.</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 402.43 804.97)">2'- 10 1/2"</text>
    	<path className="cls-9" d="M477 436.3h418M799.5 556v203"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 824.8 487.92)">12'- 0"</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 707.86 452.72)">
    		<tspan x="2.4" y="0"/>
    		<tspan x="4.9" y="0"/>
    		<tspan x="7.3" y="0"/>
    		<tspan x="9.8" y="0"/>
    		<tspan x="12.3" y="0"/>
    		<tspan x="14.7" y="0"/>
    		<tspan x="17.1" y="0">3</tspan>
    		<tspan x="23.1" y="0">5</tspan>
    		<tspan x="29.3" y="0">'</tspan>
    		<tspan x="31.5" y="0">-</tspan>
    		<tspan x="35.2" y="0"/>
    		<tspan x="37.6" y="0">0</tspan>
    		<tspan x="44.7" y="0">"</tspan>
    	</text>
    	<path className="cls-9" d="M577 449.7V653"/>
    	<path className="cls-3" d="M573.8 458.2l6.6-6.5M892 458.2l6.6-6.6"/>
    	<path className="cls-9" d="M577 455h318M615 622.3s-5.5 9.7-9 15-7 10.2-9.5 9.2c-3.7-1.5 1.3-7.7-2-9.5-1.5-1-4.8.6-7.3 5s-7.5 12.2-7.5 12.2c.7-1.4 1.8-2.6 2-3.6s.4-.7.3-2.5"/>
    	<path className="cls-9" d="M579.8 654.2c.7-.8 1.2-2 2-2.8s1.2-1 2.4-1.8M832.6 636s-8.6 7-13.7 11-10 7.2-12 5.5c-3-2.7 3.7-7 1.4-9.6-1.2-1.6-4.8-1.2-8.7 2.2s-11 9-11 9c1-1 2.4-2 2.8-2.7s.8-.5 1.3-2.3"/>
    	<path className="cls-9" d="M788.6 654.2c1-.5 2-1.6 3-2l2.8-.8M551.4 683.2c1 .2 2.5 0 3.5.2s1.3.5 2.7 1M557.7 682l-2.8 1s-2.5 0-3.6.2h50"/>
    	<circle className="cls-9" cx="720.8" cy="638" r="1.1"/>
    	<text className="cls-10" transform="matrix(0 .76 -.76 0 687.42 632.39)">UP</text>
    	<path className="cls-9" d="M627.3 669.3l-7.7-9.4c1 1 2 2.4 2.8 2.8s.5.8 2.2 1.3M619.6 660c.5 1 1.6 1.8 2 2.8l.8 2.8M740.8 668.2c-6.6-7.6-6-7.2-6-7.2 1 1 2 2.5 2.7 3s.5.7 2.3 1.2"/>
    	<path className="cls-9" d="M734.7 661c.5 1 1.6 2 2 3l1 2.7M635 725.3c3.8 5 7.3 10 5.5 12-2.6 3-6.8-3.8-9.6-1.5-1.5 1.3-1 5 2.3 8.7s2.8 3.8 2.8 3.8c-1.2-1.3-2-2.5-2.6-3s-.5-.6-2.3-1"/>
    	<path className="cls-9" d="M636 748.3c-.4-1-1.5-2-1.8-3l-1-2.7"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 609.48 675.6)">
    		5 1/8" X 16 1/2"
    		<tspan x="2.3" y="12">GLU-LAM BM</tspan>
    	</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 717.6 675.6)">
    		5 1/8" X 16 1/2"
    		<tspan x="2.3" y="12">GLU-LAM BM</tspan>
    	</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 552.35 679.84)">1% SLOPE (2")</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 474.81 740.06)">8'X 7' O.H. DOOR</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 474.81 634.83)">8'X 7' O.H. DOOR</text>
    	<path className="cls-11" d="M479.4 649v-82M479.4 747.4v-82"/>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 499.62 723.7)">4"X10" HDR</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 500.44 622.83)">4"X10" HDR</text>
    	<path className="cls-9" d="M480 601c1 0 2.4-.2 3.4.2l2.8 1"/>
    	<path className="cls-9" d="M486.2 599.7l-2.8 1s-2.4 0-3.5.2h9.8M480 705c1 .3 2.4 0 3.4.3l2.8 1"/>
    	<path className="cls-9" d="M486.2 703.8l-2.8 1s-2.4 0-3.5.3h9.8M746.5 507.8c4 5 7.3 10 5.6 12-2.6 3-6.8-4-9.5-1.5-1.5 1.2-1 4.8 2.3 8.7s9 11 9 11c-1-1-2-2.4-2.7-3s-.4-.6-2.2-1"/>
    	<path className="cls-9" d="M753.8 538c-.5-1-1.6-2-2-3l-1-2.7"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 715.64 495.27)">
    		UPPER FLOOR
    		<tspan x="6.2" y="12">OVERHANG</tspan>
    	</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 675.27 578.7)">
    		2
    		<tspan className="cls-12" x="5.9" y="-6">6</tspan>
    		<tspan x="9.7" y="0">6</tspan>
    		<tspan className="cls-12" x="16" y="-6">8</tspan>
    	</text>
    	<path className="cls-9" d="M670.8 638c1 .2 2.5 0 3.5.3l2.8 1M677 636.8l-2.7 1s-2.4 0-3.5.2h50M749.8 718.7c4 5 7.3 10 5.6 12-2.7 3-7-3.8-9.6-1.5-1.5 1.2-1 4.8 2.3 8.7s3 3.7 3 3.7c-1.3-1.3-2-2.5-2.8-3s-.5-.7-2.2-1.2"/>
    	<path className="cls-9" d="M751 741.7c-.5-1-1.6-2-2-3l-.8-2.7M658.5 586v-32"/>
    	<path className="cls-3" d="M661.7 568.7l-6.5-6.5M661.5 557.7L655 551"/>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 703.52 595.1)">7'4"</text>
    	<path className="cls-9" d="M654 566h16.4"/>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 654.87 583.16)">1'-4"</text>
    	<path className="cls-9" d="M706.5 622v-68"/>
    	<path className="cls-3" d="M709.7 625.2l-6.5-6.6M709.5 557.2l-6.5-6.5"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 768.28 535.92)">
    		3
    		<tspan className="cls-12" x="5.9" y="-6">0</tspan>
    		<tspan x="10.2" y="0">3</tspan>
    		<tspan className="cls-12" x="16.1" y="-6">5</tspan>
    		<tspan className="cls-13" x="19.8" y="0"/>
    		<tspan x="25.7" y="0">SH</tspan>
    	</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 771.06 774.78)">
    		3
    		<tspan className="cls-12" x="5.9" y="-6">0</tspan>
    		<tspan x="10.2" y="0">3</tspan>
    		<tspan className="cls-12" x="16.1" y="-6">5</tspan>
    		<tspan className="cls-13" x="19.8" y="0"/>
    		<tspan x="25.7" y="0">SH</tspan>
    	</text>
    	<text className="cls-10" transform="rotate(-90 525.1 95.38) scale(.76)">8'- 3 "R.O.</text>
    	<path className="cls-2" d="M928 710.3l13.7-13.7 13.7 13.7H928z"/>
    	<circle className="cls-3" cx="941.8" cy="710.5" r="8.9"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 938.65 708.8)">A</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 939.42 717.54)">5</text>
    	<path className="cls-3" d="M933 710.5h17.7"/>
    	<path className="cls-2" d="M810.4 540.3l-13.7-13.8 13.7-13.7v27.5z"/>
    	<circle className="cls-3" cx="810.6" cy="526.5" r="8.9"/>
    	<circle className="cls-3" cx="810.5" cy="526.5" r="8.9"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 807.5 524.64)">B</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 807.94 532.43)">5</text>
    	<path className="cls-3" d="M801.6 526.4h17.8"/>
    	<path className="cls-2" d="M364.4 710.3l13.7-13.7 13.8 13.7h-27.4z"/>
    	<circle className="cls-3" cx="378.2" cy="710.5" r="8.9"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 375.04 708.8)">A</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 375.81 717.54)">5</text>
    	<path className="cls-3" d="M369.3 710.5H387"/>
    	<path className="cls-2" d="M810 807.8L796 794l13.7-13.6v27.4z"/>
    	<circle className="cls-3" cx="810.1" cy="794.1" r="8.9"/>
    	<circle className="cls-3" cx="810" cy="794.1" r="8.9"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 807.02 792.22)">B</text>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 807.64 800.71)">5</text>
    	<path className="cls-3" d="M801 794h18"/>
    	<path className="cls-5" d="M377 719.5v21.2M379 722.2v21.2M374.2 737.8h35M375.5 739.3h35M943.3 719.5v21.2M941.3 722.2v21.2M946.3 737.8h-35M945 739.3h-35M819 524h21.2M821.7 526H843M837.3 521v35M839 522.4v35M819 795h21M821.6 792.8H843M837.2 797.8v-35M838.8 796.5v-35"/>
    	<circle className="cls-3" cx="785.8" cy="606.3" r="3.9"/>
    	<path className="cls-3" d="M787.6 606.3h4.8M785.8 604.5v-4.8M784 606.3h-4.8M785.8 608v4.8"/>
    	<circle className="cls-3" cx="577.2" cy="708.9" r="3.9"/>
    	<path className="cls-3" d="M578.2 701.8v12.7M576 703V716"/>
    	<circle className="cls-3" cx="577.2" cy="605.1" r="3.9"/>
    	<path className="cls-3" d="M578.2 598v12.7M576 599.3V612"/>
    	<circle className="cls-3" cx="586.5" cy="616.4" r="3.9"/>
    	<path className="cls-3" d="M588.4 616.4h4.7"/>
    	<path className="cls-14" d="M583.3 696.4c-8.8-10.2-22-26.5-21-38.8s12-38 24.3-43v-4.8"/>
    	<path className="cls-3" d="M584.7 616.4H580M586.5 618.2v4.8"/>
    	<circle className="cls-3" cx="586.5" cy="698.5" r="3.9"/>
    	<path className="cls-3" d="M588.4 698.5h4.7M586.5 696.7V692M584.7 698.5H580M586.5 700.3v4.7"/>
    	<circle className="cls-3" cx="456.3" cy="657.6" r="3.9"/>
    	<path className="cls-3" d="M458 657.6h5M456.3 655.8V651M454.5 657.6h-4.7M456.3 659.5v4.7"/>
    	<circle className="cls-3" cx="664" cy="708" r="3.9"/>
    	<path className="cls-3" d="M657 707h12.6M658.2 709H671"/>
    	<circle className="cls-3" cx="664" cy="601.5" r="3.9"/>
    	<path className="cls-3" d="M657 600.5h12.6M658.2 602.6H671"/>
    	<text className="cls-15" transform="matrix(0 -.76 .76 0 668.08 589.43)">S</text>
    	<path className="cls-3" d="M660 587.3h11M659.6 585.5h11"/>
    	<text className="cls-15" transform="matrix(0 -.76 .76 0 668.08 595.54)">S</text>
    	<path className="cls-3" d="M660 593.4h11M659.6 591.6h11"/>
    	<path className="cls-16" d="M589.4 613.6c10.2-5.4 27-17 44.8-18.3l27.8-2"/>
    	<path className="cls-16" d="M459.2 655.7c26.5-17 65-51.6 114-58.4s73-9 85.4-9.5"/>
    	<circle className="cls-3" cx="880.9" cy="593.6" r="3.9"/>
    	<path className="cls-3" d="M873.7 592.6h12.7M875 594.7h12.7"/>
    	<circle className="cls-3" cx="880.9" cy="721.6" r="3.9"/>
    	<path className="cls-3" d="M873.7 720.6h12.7M875 722.7h12.7"/>
    	<circle className="cls-3" cx="853.4" cy="752.6" r="3.9"/>
    	<path className="cls-3" d="M854.4 745.5v12.7M852.3 746.8v12.7"/>
    	<circle className="cls-3" cx="709" cy="751.8" r="3.9"/>
    	<path className="cls-3" d="M710 744.6v12.7M708 746v12.6"/>
    	<circle className="cls-3" cx="853.4" cy="563.6" r="3.9"/>
    	<path className="cls-3" d="M854.4 556.4V569M852.3 557.8v12.7"/>
    	<circle className="cls-3" cx="709" cy="562.7" r="3.9"/>
    	<path className="cls-3" d="M710 555.6v12.7M708 557v12.6"/>
    	<circle className="cls-3" cx="685.8" cy="593.6" r="3.9"/>
    	<path className="cls-3" d="M678.7 592.6h12.7M680 594.7h12.7"/>
    	<circle className="cls-3" cx="685.8" cy="721.6" r="3.9"/>
    	<path className="cls-3" d="M678.7 720.6h12.7M680 722.7h12.7"/>
    	<circle className="cls-3" cx="785.8" cy="709.4" r="3.9"/>
    	<path className="cls-3" d="M787.6 709.4h4.8M785.8 707.6v-4.8M784 709.4h-4.8M785.8 711.2v4.8"/>
    	<text className="cls-15" transform="rotate(90 42.02 640.96) scale(.76)">S</text>
    	<path className="cls-3" d="M691 601h-11M691.5 603h-11"/>
    	<path className="cls-14" d="M693.4 600.6c9.5-2.5 29.2-6 44.7-6s40.2 7.3 43 9.5M790.5 612.7c4.3 6.8 16.3 27.2 16.3 45s-9.4 38.4-16.3 47"/>
    	<text className="cls-10" transform="matrix(.76 0 0 .76 561.99 689.54)">DOWN</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 911.42 715.08)">
    		3
    		<tspan className="cls-12" x="5.9" y="-6">0</tspan>
    		<tspan x="10.2" y="0">3</tspan>
    		<tspan className="cls-12" x="16.1" y="-6">5</tspan>
    		<tspan className="cls-13" x="19.8" y="0"/>
    		<tspan x="25.7" y="0">SH</tspan>
    	</text>
    	<text className="cls-10" transform="matrix(0 -.76 .76 0 911.42 631.81)">
    		3
    		<tspan className="cls-12" x="5.9" y="-6">0</tspan>
    		<tspan x="10.2" y="0">3</tspan>
    		<tspan className="cls-12" x="16.1" y="-6">5</tspan>
    		<tspan className="cls-13" x="19.8" y="0"/>
    		<tspan x="25.7" y="0">SH</tspan>
    	</text>
    </Blueprint>
  </Hero>
)
