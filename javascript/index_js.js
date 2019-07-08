
console.log("asdhjhasdj")
//jquery after page loaded
$(function () {
  // jQuery methods go here...
  $('#slides').superslides({
    hashchange: true,
    play: 2000,
    animation: 'fade'
  });


  var typed = new Typed(".typed", {
    strings: ["Android Developer.", "Web Developer.", "Programmer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  

  createChart('.chart', 152);
  createChart('.smallchart', 90, 5);


});


//runs after all resources are loaded
$(document).ready(function () {
  // hiding the loader
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });

  doBlast('h3', 'character');
  doBlast('p', 'word');
  doBlast('.main', 'character');
  responsiveChartDisplay()

});


function createChart(element, Size, lineWidth = 10) {
  $(element).easyPieChart({
    easing: 'easeInOut',
    barColor: '#08fdd8',
    trackColor: false,
    scaleColor: false,
    lineWidth: lineWidth,
    size: Size,
    onStep: function (from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }
  });
}

function responsiveChartDisplay() {

  $(window).resize(function () {
    console.log($(window).width());

    reSize();

  });


}

function reSize() {

 /*  if ($(window).width() < 913) {

    $("#java-chart").removeClass('col-md-4').addClass('col-md-12');
    $("#js-chart").remove();
    $("#python-chart").remove();
  } else
    if ($(window).width() < 983) {
      // show only two charts
      $("#js-chart").removeClass('col-md-4').addClass('col-md-6');
      $("#java-chart").removeClass('col-md-4').addClass('col-md-6');
      $("#python-chart").remove();

    } else {
      if (!($("#python-chart").length && $("#js-chart").length)) {
        $("#pie-container").remove();
        $("#container").append(data);

      }
    } */


}


function display3BigCharts() {
  let allCharts = `
   <div id="pie-container" class="row no-gutters">

                        <div id="java-chart" class="col-md-4">
                            <div class="box">
                                <div class="chart" data-percent="73">
                                    <span class="percent">73%</span>
                                    <canvas height="152" width="152"></canvas>
                                </div>

                                <span>
                                    <h3>java</h3>
                                </span>
                            </div>
                        </div>

                        <div id="js-chart" class="col-md-4">
                            <div class="box">
                                <div class="chart" data-percent="73">
                                    <span class="percent">73%</span>
                                    <canvas height="152" width="152"></canvas>
                                </div>

                                <span>
                                    <h3>javascript</h3>
                                </span>
                            </div>
                        </div>

                        <div id="python-chart" class="col-md-4">
                            <div class="box">
                                <div class="chart" data-percent="73">
                                    <span class="percent">73%</span>
                                    <canvas height="152" width="152"></canvas>
                                </div>

                                <span>
                                    <h3>python</h3>
                                </span>
                            </div>
                        </div>

                        <div id="small-container" class="col-md-12">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="box">
                                        <div class="smallchart" data-percent="73">
                                            <span class="percent">73%</span>
                                            <canvas height="152" width="152"></canvas>
                                        </div>

                                        <span>
                                            <h3>C++</h3>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="box">
                                        <div class="smallchart" data-percent="73">
                                            <span class="percent">73%</span>
                                            <canvas height="152" width="152"></canvas>
                                        </div>

                                        <span>
                                            <h3>C </h3>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="box">
                                        <div class="smallchart" data-percent="73">
                                            <span class="percent">73%</span>
                                            <canvas height="152" width="152"></canvas>
                                        </div>

                                        <span>
                                            <h3>C#</h3>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="box">
                                        <div class="smallchart" data-percent="73">
                                            <span class="percent">73%</span>
                                            <canvas height="152" width="152"></canvas>
                                        </div>

                                        <span>
                                            <h3>MySql</h3>
                                        </span>
                                    </div>
                                </div>

                            </div>


                        </div>

                        <div id="scre" class="col-md-12">


                        </div>

                    </div>`

  return allCharts;
}


function display2BigCharts() {

  let chart = `
  <div id="pie-container" class="row no-gutters">

      <div id="java-chart" class="col-md-6">
          <div class="box">
              <div class="chart" data-percent="73">
                  <span class="percent">73%</span>
                  <canvas height="152" width="152"></canvas>
              </div>

              <span>
                  <h3>java</h3>
              </span>
          </div>
      </div>

      <div id="js-chart" class="col-md-6">
          <div class="box">
              <div class="chart" data-percent="73">
                  <span class="percent">73%</span>
                  <canvas height="152" width="152"></canvas>
              </div>

              <span>
                  <h3>javascript</h3>
              </span>
          </div>
      </div>



      <div id="small-container" class="col-md-12">
          <div class="row">
              <div class="col-md-4">
                  <div class="box">
                      <div class="smallchart" data-percent="73">
                          <span class="percent">73%</span>
                          <canvas height="152" width="152"></canvas>
                      </div>

                      <span>
                          <h3>C++</h3>
                      </span>
                  </div>
              </div>

              <div class="col-md-4">
                  <div class="box">
                      <div class="smallchart" data-percent="73">
                          <span class="percent">73%</span>
                          <canvas height="152" width="152"></canvas>
                      </div>

                      <span>
                          <h3>C </h3>
                      </span>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="box">
                      <div class="smallchart" data-percent="73">
                          <span class="percent">73%</span>
                          <canvas height="152" width="152"></canvas>
                      </div>

                      <span>
                          <h3>C#</h3>
                      </span>
                  </div>
              </div>

              <div class="col-md-4">
                  <div class="box">
                      <div class="smallchart" data-percent="73">
                          <span class="percent">73%</span>
                          <canvas height="152" width="152"></canvas>
                      </div>

                      <span>
                          <h3>MySql</h3>
                      </span>
                  </div>
              </div>

              <div class="col-md-4">
                  <div id="python-chart">
                      <div class="box">
                          <div class="smallchart" data-percent="73">
                              <span class="percent">73%</span>
                              <canvas height="152" width="152"></canvas>
                          </div>
                          <span>
                              <h3>python</h3>
                          </span>
                      </div>
                  </div>
              </div>

          </div>


      </div>

      <div id="smallest-chart" class="col-md-12">
          <div class="row">



          </div>

      </div>

  </div>
`


  return chart;
}

function display1BigCharts(){
  let chart=`     
          <div id="pie-container" class="row no-gutters">

  <div id="java-chart" class="col-md-12">
      <div class="box">
          <div class="chart" data-percent="73">
              <span class="percent">73%</span>
              <canvas height="152" width="152"></canvas>
          </div>

          <span>
              <h3>java</h3>
          </span>
      </div>
  </div>



  <div id="small-container" class="col-md-12">
      <div class="row">
          <div class="col-md-4">
              <div class="box">
                  <div class="smallchart" data-percent="73">
                      <span class="percent">73%</span>
                      <canvas height="152" width="152"></canvas>
                  </div>

                  <span>
                      <h3>C++</h3>
                  </span>
              </div>
          </div>

          <div class="col-md-4">
              <div class="box">
                  <div class="smallchart" data-percent="73">
                      <span class="percent">73%</span>
                      <canvas height="152" width="152"></canvas>
                  </div>

                  <span>
                      <h3>C </h3>
                  </span>
              </div>
          </div>
          <div class="col-md-4">
              <div class="box">
                  <div class="smallchart" data-percent="73">
                      <span class="percent">73%</span>
                      <canvas height="152" width="152"></canvas>
                  </div>

                  <span>
                      <h3>C#</h3>
                  </span>
              </div>
          </div>

          <div class="col-md-4">
              <div class="box">
                  <div class="smallchart" data-percent="73">
                      <span class="percent">73%</span>
                      <canvas height="152" width="152"></canvas>
                  </div>

                  <span>
                      <h3>MySql</h3>
                  </span>
              </div>
          </div>

          <div class="col-md-4">
              <div id="python-chart">
                  <div class="box">
                      <div class="smallchart" data-percent="73">
                          <span class="percent">73%</span>
                          <canvas height="152" width="152"></canvas>
                      </div>
                      <span>
                          <h3>python</h3>
                      </span>
                  </div>
              </div>
          </div>

          <div id="js-chart" class="col-md-4">
              <div class="box">
                  <div class="smallchart" data-percent="73">
                      <span class="percent">73%</span>
                      <canvas height="152" width="152"></canvas>
                  </div>

                  <span>
                      <h3>javascript</h3>
                  </span>
              </div>
          </div>


      </div>


  </div>


</div>`

  return chart;
}

