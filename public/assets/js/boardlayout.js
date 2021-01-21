//THE BOARD
let fullBoardSec = document.getElementById('fullBoard');
fullBoardSec.className = 'theFullBoard'
fullBoardSec.innerHTML = `
<div class='row'>
    <div class='teamTitle col-1' id='team2Name'></div>
    <div class='teamTitle col-1' id='team2SmName'></div>
    <div class='teamTitle col-11'>
        <div class= row id='team1Name'></div>
        <div class= row id='team1SmName'></div>
        <div class='row'>
            <div id='team1score01' class='scoreTitle oneBox oneBoxShift'>x</div>
            <div id='team1score02' class='scoreTitle oneBox'>x</div>
            <div id='team1score03' class='scoreTitle oneBox'>x</div>
            <div id='team1score04' class='scoreTitle oneBox'>x</div>
            <div id='team1score05' class='scoreTitle oneBox'>x</div>
            <div id='team1score06' class='scoreTitle oneBox'>x</div>
            <div id='team1score07' class='scoreTitle oneBox'>x</div>
            <div id='team1score08' class='scoreTitle oneBox'>x</div>
            <div id='team1score09' class='scoreTitle oneBox'>x</div>
            <div id='team1score10' class='scoreTitle oneBox'>x</div>
        </div>
        <div class='row'>
            <div id='team2score01' class='scoreTitle oneBox'>x</div>
            <div id='box_00' class='boxEmpty oneBox'>1</div>
            <div id='box_01' class='boxEmpty oneBox'>2</div>
            <div id='box_02' class='boxEmpty oneBox'>3</div>
            <div id='box_03' class='boxEmpty oneBox'>4</div>
            <div id='box_04' class='boxEmpty oneBox'>5</div>
            <div id='box_05' class='boxEmpty oneBox'>6</div>
            <div id='box_06' class='boxEmpty oneBox'>7</div>
            <div id='box_07' class='boxEmpty oneBox'>8</div>
            <div id='box_08' class='boxEmpty oneBox'>9</div>
            <div id='box_09' class='boxEmpty oneBox'>10</div>
        </div>
        <div class='row'>
            <div id='team2score02' class='scoreTitle oneBox'>x</div>
            <div id='box_10' class='boxEmpty oneBox'>11</div>
            <div id='box_11' class='boxEmpty oneBox'>12</div>
            <div id='box_12' class='boxEmpty oneBox'>13</div>
            <div id='box_13' class='boxEmpty oneBox'>14</div>
            <div id='box_14' class='boxEmpty oneBox'>15</div>
            <div id='box_15' class='boxEmpty oneBox'>16</div>
            <div id='box_16' class='boxEmpty oneBox'>17</div>
            <div id='box_17' class='boxEmpty oneBox'>18</div>
            <div id='box_18' class='boxEmpty oneBox'>19</div>
            <div id='box_19' class='boxEmpty oneBox'>20</div>
        </div>
        <div class='row'>
            <div id='team2score03' class='scoreTitle oneBox'>x</div>
            <div id='box_20' class='boxEmpty oneBox'>21</div>
            <div id='box_21' class='boxEmpty oneBox'>22</div>
            <div id='box_22' class='boxEmpty oneBox'>23</div>
            <div id='box_23' class='boxEmpty oneBox'>24</div>
            <div id='box_24' class='boxEmpty oneBox'>25</div>
            <div id='box_25' class='boxEmpty oneBox'>26</div>
            <div id='box_26' class='boxEmpty oneBox'>27</div>
            <div id='box_27' class='boxEmpty oneBox'>28</div>
            <div id='box_28' class='boxEmpty oneBox'>29</div>
            <div id='box_29' class='boxEmpty oneBox'>30</div>
        </div>
        <div class='row'>
            <div id='team2score04' class='scoreTitle oneBox'>x</div>
            <div id='box_30' class='boxEmpty oneBox'>31</div>
            <div id='box_31' class='boxEmpty oneBox'>32</div>
            <div id='box_32' class='boxEmpty oneBox'>33</div>
            <div id='box_33' class='boxEmpty oneBox'>34</div>
            <div id='box_34' class='boxEmpty oneBox'>35</div>
            <div id='box_35' class='boxEmpty oneBox'>36</div>
            <div id='box_36' class='boxEmpty oneBox'>37</div>
            <div id='box_37' class='boxEmpty oneBox'>38</div>
            <div id='box_38' class='boxEmpty oneBox'>39</div>
            <div id='box_39' class='boxEmpty oneBox'>40</div>
        </div>
        <div class='row'>
            <div id='team2score05' class='scoreTitle oneBox'>x</div>
            <div id='box_40' class='boxEmpty oneBox'>41</div>
            <div id='box_41' class='boxEmpty oneBox'>42</div>
            <div id='box_42' class='boxEmpty oneBox'>43</div>
            <div id='box_43' class='boxEmpty oneBox'>44</div>
            <div id='box_44' class='boxEmpty oneBox'>45</div>
            <div id='box_45' class='boxEmpty oneBox'>46</div>
            <div id='box_46' class='boxEmpty oneBox'>47</div>
            <div id='box_47' class='boxEmpty oneBox'>48</div>
            <div id='box_48' class='boxEmpty oneBox'>49</div>
            <div id='box_49' class='boxEmpty oneBox'>50</div>
        </div>
        <div class='row'>
            <div id='team2score06' class='scoreTitle oneBox'>x</div>
            <div id='box_50' class='boxEmpty oneBox'>51</div>
            <div id='box_51' class='boxEmpty oneBox'>52</div>
            <div id='box_52' class='boxEmpty oneBox'>53</div>
            <div id='box_53' class='boxEmpty oneBox'>54</div>
            <div id='box_54' class='boxEmpty oneBox'>55</div>
            <div id='box_55' class='boxEmpty oneBox'>56</div>
            <div id='box_56' class='boxEmpty oneBox'>57</div>
            <div id='box_57' class='boxEmpty oneBox'>58</div>
            <div id='box_58' class='boxEmpty oneBox'>59</div>
            <div id='box_59' class='boxEmpty oneBox'>60</div>
        </div>
        <div class='row'>
            <div id='team2score07' class='scoreTitle oneBox'>x</div>
            <div id='box_60' class='boxEmpty oneBox'>61</div>
            <div id='box_61' class='boxEmpty oneBox'>62</div>
            <div id='box_62' class='boxEmpty oneBox'>63</div>
            <div id='box_63' class='boxEmpty oneBox'>64</div>
            <div id='box_64' class='boxEmpty oneBox'>65</div>
            <div id='box_65' class='boxEmpty oneBox'>66</div>
            <div id='box_66' class='boxEmpty oneBox'>67</div>
            <div id='box_67' class='boxEmpty oneBox'>68</div>
            <div id='box_68' class='boxEmpty oneBox'>69</div>
            <div id='box_69' class='boxEmpty oneBox'>70</div>
        </div>
        <div class='row'>
            <div id='team2score08' class='scoreTitle oneBox'>x</div>
            <div id='box_70' class='boxEmpty oneBox'>71</div>
            <div id='box_71' class='boxEmpty oneBox'>72</div>
            <div id='box_72' class='boxEmpty oneBox'>73</div>
            <div id='box_73' class='boxEmpty oneBox'>74</div>
            <div id='box_74' class='boxEmpty oneBox'>75</div>
            <div id='box_75' class='boxEmpty oneBox'>76</div>
            <div id='box_76' class='boxEmpty oneBox'>77</div>
            <div id='box_77' class='boxEmpty oneBox'>78</div>
            <div id='box_78' class='boxEmpty oneBox'>79</div>
            <div id='box_79' class='boxEmpty oneBox'>80</div>
        </div>
        <div class='row'>
            <div id='team2score09' class='scoreTitle oneBox'>x</div>
            <div id='box_80' class='boxEmpty oneBox'>81</div>
            <div id='box_81' class='boxEmpty oneBox'>82</div>
            <div id='box_82' class='boxEmpty oneBox'>83</div>
            <div id='box_83' class='boxEmpty oneBox'>84</div>
            <div id='box_84' class='boxEmpty oneBox'>85</div>
            <div id='box_85' class='boxEmpty oneBox'>86</div>
            <div id='box_86' class='boxEmpty oneBox'>87</div>
            <div id='box_87' class='boxEmpty oneBox'>88</div>
            <div id='box_88' class='boxEmpty oneBox'>89</div>
            <div id='box_89' class='boxEmpty oneBox'>90</div>
        </div>
        <div class='row'>
            <div id='team2score10' class='scoreTitle oneBox'>x</div>
            <div id='box_90' class='boxEmpty oneBox'>91</div>
            <div id='box_91' class='boxEmpty oneBox'>92</div>
            <div id='box_92' class='boxEmpty oneBox'>93</div>
            <div id='box_93' class='boxEmpty oneBox'>94</div>
            <div id='box_94' class='boxEmpty oneBox'>95</div>
            <div id='box_95' class='boxEmpty oneBox'>96</div>
            <div id='box_96' class='boxEmpty oneBox'>97</div>
            <div id='box_97' class='boxEmpty oneBox'>98</div>
            <div id='box_98' class='boxEmpty oneBox'>99</div>
            <div id='box_99' class='boxEmpty oneBox'>100</div>
        </div>
    </div>
</div>
`
//LARGE INFO
let gameinfoLg = document.getElementById('gameinfoLg');
gameinfoLg.className = 'gameinfo';
gameinfoLg.innerHTML = `
    <section id='game-info'>
        <div class='row infoMainTitle'>GAME INFORMATION</div>
        <div class='row infoTitle'>GAME</div>
        <div id='teamNames' class='row infoSubtitle'></div>
        <div class='row infoTitle'>DATE</div>
        <div id='gameDate' class='row infoSubtitle'></div>
        <div class='row infoTitle'>TIME</div>
        <div id='gameTime' class='row infoSubtitle'></div>
        <div class='row infoTitle'>PRICE</div>
        <div class='row'>
            <div id='Sq1' class='infoSubtitle'>1 Square</div>
            <div id='Sq1Price' class='infoText'></div>
        </div> 
        <div id = 'Sq3display' class='row'>
            <div id='Sq3' class='infoSubtitle'>3 Square</div>
            <div id='Sq3Price' class='infoText'></div>
        </div>
        <div class='row infoTitle'>PAYOUTS</div>
        <div class='row'>
            <div class='infoSubtitle'>1st Quarter</div>
            <div id='q1Pay' class='infoText'></div>
        </div> 
        <div class='row'>
            <div class='infoSubtitle'>Half Time</div>
            <div id='q2Pay' class='infoText'></div>
        </div>
        <div class='row'>
            <div class='infoSubtitle'>3rd Quarter</div>
            <div id='q3Pay' class='infoText'></div>
        </div> 
        <div class='row'>
            <div class='infoSubtitle'>Final Score</div>
            <div id='q4Pay' class='infoText'></div>
        </div>
    </section>
    <section id='admin-info'>
        <div class='row infoMainTitle'>ADMIN INFORMATION</div>
        <div id='adminName' class='row infoTitle'></div>
        <div id='adminContactEmail' class='row'>
            <div class='infoSubtitle'>Email</div>
            <div id='adminEmail' class='infoText'></div>
        </div>
        <div id='adminContactPhone' class='row'>
            <div class='infoSubtitle'>Phone</div>
            <div id='adminPhone' class='infoText'></div>
        </div>
    </section>
    <section id='box-info'>
        <div class='row infoMainTitle'>BUY BOXES</div>
        <input type=text class='inputemail highlight' id='useremail' placeholder="Your email address" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' required>
        <div id="inputemailmessage" class='inputInfo'>The email address must be the same one the invite got sent to</div>
        <div class='infoTitle'>How many boxes?</div>
        <div class='row'>
            <div class='radiobtn col-5 offset-1'>
                <input type="radio" id='radbox1' name='numBox'vaule='1' checked>
                <lable for='radbox1'>1 Box</lable>
            </div>
            <div class='radiobtn col-5 offset-1'>
                <input type="radio" id='radbox3' name='numBox'vaule='3'>
                <lable for='radbox3'>3 Boxes</lable>
            </div>
        </div>
        <div class='row freeBoxOption'>
            <div class='boxNum col-1'>1. </div>
            <div id='select1' class='col-10'> </div>
        </div>
        <div id='addTwoMore'>
            <div class='row freeBoxOption'>
                <div class='boxNum col-1'>2. </div>
                <div id='select2' class='col-10'> </div>
            </div>
            <div class='row freeBoxOption'>
                <div class='boxNum col-1'>3. </div>
                <div id='select3' class='col-10'> </div>
            </div>
        </div>
        <div id='selectMessage'></div>
        <div class="row theBtn">
            <button class='subBtn' onclick="submitTheBox()">SUBMIT</button>
        </div>
    </section>
`
//SMALL INFO
let gameInfoSmSec = document.getElementById('gameinfoSm');
gameInfoSmSec.className = 'row'
gameInfoSmSec.innerHTML = `
    <div class='col-12'>
        <div class='row infoMainTitle'>GAME INFORMATION</div>
        <div class='row infoTitleSm'>
            <div class='col-2'>GAME</div>
            <div class='col-1'>DATE</div>
            <div class='col-1'>TIME</div>
            <div class='col-3 priceBorder'>
                <div class='row'>
                    <div class='col-12 infoSubTitleSm'>PRICE</div>
                </div>
                <div class='row'>
                    <div class='col-6' id='Sq1displaySm'>1Sq</div> 
                    <div class='col-6' id='Sq3displaySm'>3Sq</div>
                </div>
            </div>
            <div class='col-5'>
                <div class='row'>
                    <div class='col-12 infoSubTitleSm'>PAYOUTS</div>
                </div>
                <div class='row infoSubTitleSm'>
                    <div class='col-3'>Q1</div>
                    <div class='col-3'>HT</div>
                    <div class='col-3'>Q3</div>
                    <div class='col-3'>Final</div>
                </div>
            </div>
        </div>
        <div class = 'row infoTextSm'>
            <div class='col-2' id='teamNamesSm'></div>
            <div class='col-1' id='gameDateSm'></div>
            <div class='col-1' id='gameTimeSm'></div>
            <div class='col-3'>
                <div class='row'>
                    <div class='col-6' id='Sq1PriceSm'></div>
                    <div class='col-6' id='Sq3PriceSm'></div>
                </div>
            </div>
            <div class='col-5'>
                <div class='row'>
                    <div class='col-3' id='q1PaySm'></div>
                    <div class='col-3' id='q2PaySm'></div>
                    <div class='col-3' id='q3PaySm'></div>
                    <div class='col-3' id='q4PaySm'></div>
                </div>
            </div>
        </div>
    </div>
`

/* <div class='col-4'>
<div class='row infoMainTitle'>ADMIN INFORMATION</div>
<div class='row infoTitleSm'>
    <div class='col-4'>NAME</div>
    <div class='col-5'>EMAIL</div>
    <div class='col-3'>PHONE</div>
</div>
<div class='row infoTextSm'>
    <div class='col-4' id='adminNameSm'></div>
    <div class='col-5' id='adminEmailSm'></div>
    <div class='col-3' id='adminPhoneSm'></div>
</div>
</div> */