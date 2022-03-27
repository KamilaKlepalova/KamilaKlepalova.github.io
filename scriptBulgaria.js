var margin = { top: 40, right: 150, bottom: 100, left: 60 },
    width = 460 - margin.left - margin.right + 50,
    height = 320 - margin.top - margin.bottom;

var vaccDataBulgaria = [{ "year": "1-2021", "value": 0.001897152 }, { "year": "2-2021", "value": 0.005419874 }, { "year": "3-2021", "value": 0.013775229 }, { "year": "4-2021", "value": 0.030935867 }, { "year": "5-2021", "value": 0.081254608 }, { "year": "6-2021", "value": 0.116791836 }, { "year": "7-2021", "value": 0.144980139 }, { "year": "8-2021", "value": 0.169964135 }, { "year": "9-2021", "value": 0.192875967 }, { "year": "10-2021", "value": 0.219110569 }, { "year": "11-2021", "value": 0.256968052 }, { "year": "12-2021", "value": 0.277657792 }, { "year": "1-2022", "value": 0.289485845 }]
var icuDataBulgaria = [{ "year": "1-2021", "value": 0.094853371 }, { "year": "2-2021", "value": 0.086693261 }, { "year": "3-2021", "value": 0.080006657 }, { "year": "4-2021", "value": 0.082579774 }, { "year": "5-2021", "value": 0.102357696 }, { "year": "6-2021", "value": 0.114231386 }, { "year": "7-2021", "value": 0.115993099 }, { "year": "8-2021", "value": 0.087681372 }, { "year": "9-2021", "value": 0.083235324 }, { "year": "10-2021", "value": 0.086390421 }, { "year": "11-2021", "value": 0.096875419 }, { "year": "12-2021", "value": 0.114328588 }, { "year": "1-2022", "value": 0.103477021 }]
var deathDataBulgaria = [{ "year": "1-2021", "value": 0.089127533 }, { "year": "2-2021", "value": 0.040509014 }, { "year": "3-2021", "value": 0.031445159 }, { "year": "4-2021", "value": 0.05185677 }, { "year": "5-2021", "value": 0.091639079 }, { "year": "6-2021", "value": 0.11100861 }, { "year": "7-2021", "value": 0.047131783 }, { "year": "8-2021", "value": 0.022256257 }, { "year": "9-2021", "value": 0.042783283 }, { "year": "10-2021", "value": 0.031067477 }, { "year": "11-2021", "value": 0.048117539 }, { "year": "12-2021", "value": 0.048068241 }, { "year": "1-2022", "value": 0.011534876 }]

var vaccDataFrance = [{ "year": "1-2021", "value": 0.000716977 }, { "year": "2-2021", "value": 0.023667379 }, { "year": "3-2021", "value": 0.042503219 }, { "year": "4-2021", "value": 0.096410415 }, { "year": "5-2021", "value": 0.166896295 }, { "year": "6-2021", "value": 0.312538341 }, { "year": "7-2021", "value": 0.479432337 }, { "year": "8-2021", "value": 0.598516063 }, { "year": "9-2021", "value": 0.659530613 }, { "year": "10-2021", "value": 0.681452582 }, { "year": "11-2021", "value": 0.699234582 }, { "year": "12-2021", "value": 0.734520557 }, { "year": "1-2022", "value": 0.76375333 }]
var icuDataFrance = [{ "year": "1-2021", "value": 0.109904796 }, { "year": "2-2021", "value": 0.12620452 }, { "year": "3-2021", "value": 0.163776918 }, { "year": "4-2021", "value": 0.190797557 }, { "year": "5-2021", "value": 0.186650177 }, { "year": "6-2021", "value": 0.164945926 }, { "year": "7-2021", "value": 0.133821835 }, { "year": "8-2021", "value": 0.191154206 }, { "year": "9-2021", "value": 0.205228247 }, { "year": "10-2021", "value": 0.166635256 }, { "year": "11-2021", "value": 0.16873511 }, { "year": "12-2021", "value": 0.189940704 }, { "year": "1-2022", "value": 0.147475116 }]
var deathDataFrance = [{ "year": "1-2021", "value": 0.01979445 }, { "year": "2-2021", "value": 0.018541098 }, { "year": "3-2021", "value": 0.010365627 }, { "year": "4-2021", "value": 0.009126377 }, { "year": "5-2021", "value": 0.012545991 }, { "year": "6-2021", "value": 0.014452494 }, { "year": "7-2021", "value": 0.002257432 }, { "year": "8-2021", "value": 0.004129643 }, { "year": "9-2021", "value": 0.008509251 }, { "year": "10-2021", "value": 0.006445522 }, { "year": "11-2021", "value": 0.002901223 }, { "year": "12-2021", "value": 0.002007191 }, { "year": "1-2022", "value": 0.000785106 }]

var vaccDataGermany = [{ "year": "1-2021", "value": 0.0071963 }, { "year": "2-2021", "value": 0.02614884 }, { "year": "3-2021", "value": 0.050711599 }, { "year": "4-2021", "value": 0.078272588 }, { "year": "5-2021", "value": 0.181371759 }, { "year": "6-2021", "value": 0.371723622 }, { "year": "7-2021", "value": 0.520766528 }, { "year": "8-2021", "value": 0.602831443 }, { "year": "9-2021", "value": 0.641367758 }, { "year": "10-2021", "value": 0.662253422 }, { "year": "11-2021", "value": 0.681320609 }, { "year": "12-2021", "value": 0.70643371 }, { "year": "1-2022", "value": 0.734190825 }]
var icuDataGermany = [{ "year": "1-2021", "value": 0 }, { "year": "2-2021", "value": 0 }, { "year": "3-2021", "value": 0 }, { "year": "4-2021", "value": 0 }, { "year": "5-2021", "value": 0 }, { "year": "6-2021", "value": 0 }, { "year": "7-2021", "value": 0 }, { "year": "8-2021", "value": 0 }, { "year": "9-2021", "value": 0 }, { "year": "10-2021", "value": 0 }, { "year": "11-2021", "value": 0 }, { "year": "12-2021", "value": 0 }, { "year": "1-2022", "value": 0 }]
var deathDataGermany = [{ "year": "1-2021", "value": 0.048820838 }, { "year": "2-2021", "value": 0.057822433 }, { "year": "3-2021", "value": 0.016364602 }, { "year": "4-2021", "value": 0.011585823 }, { "year": "5-2021", "value": 0.019342414 }, { "year": "6-2021", "value": 0.050643851 }, { "year": "7-2021", "value": 0.017794121 }, { "year": "8-2021", "value": 0.002979514 }, { "year": "9-2021", "value": 0.005421537 }, { "year": "10-2021", "value": 0.005486372 }, { "year": "11-2021", "value": 0.004605482 }, { "year": "12-2021", "value": 0.008126041 }, { "year": "1-2022", "value": 0.002071831 }]

var vaccDataItaly = [{ "year": "1-2021", "value": 0.010705385 }, { "year": "2-2021", "value": 0.02385712 }, { "year": "3-2021", "value": 0.054203629 }, { "year": "4-2021", "value": 0.100314986 }, { "year": "5-2021", "value": 0.203428101 }, { "year": "6-2021", "value": 0.314122899 }, { "year": "7-2021", "value": 0.52472387 }, { "year": "8-2021", "value": 0.609715388 }, { "year": "9-2021", "value": 0.680560943 }, { "year": "10-2021", "value": 0.714798472 }, { "year": "11-2021", "value": 0.730578675 }, { "year": "12-2021", "value": 0.741424848 }, { "year": "1-2022", "value": 0.76398511 }]
var icuDataItaly = [{ "year": "1-2021", "value": 0.099834014 }, { "year": "2-2021", "value": 0.101708741 }, { "year": "3-2021", "value": 0.111015167 }, { "year": "4-2021", "value": 0.117278426 }, { "year": "5-2021", "value": 0.125554337 }, { "year": "6-2021", "value": 0.135014636 }, { "year": "7-2021", "value": 0.117655898 }, { "year": "8-2021", "value": 0.108359677 }, { "year": "9-2021", "value": 0.11802471 }, { "year": "10-2021", "value": 0.122490817 }, { "year": "11-2021", "value": 0.110910105 }, { "year": "12-2021", "value": 0.108416008 }, { "year": "1-2022", "value": 0.084144104 }]
var deathDataItaly = [{ "year": "1-2021", "value": 0.032200257 }, { "year": "2-2021", "value": 0.024670032 }, { "year": "3-2021", "value": 0.017656761 }, { "year": "4-2021", "value": 0.026181371 }, { "year": "5-2021", "value": 0.027263691 }, { "year": "6-2021", "value": 0.034166508 }, { "year": "7-2021", "value": 0.00551493 }, { "year": "8-2021", "value": 0.006095924 }, { "year": "9-2021", "value": 0.012843371 }, { "year": "10-2021", "value": 0.011836161 }, { "year": "11-2021", "value": 0.006734689 }, { "year": "12-2021", "value": 0.003257572 }, { "year": "1-2022", "value": 0.001872594 }]

var vaccDataMalta = [{ "year": "1-2021", "value": 0.00764968 }, { "year": "2-2021", "value": 0.054346057 }, { "year": "3-2021", "value": 0.105750823 }, { "year": "4-2021", "value": 0.207397791 }, { "year": "5-2021", "value": 0.407839566 }, { "year": "6-2021", "value": 0.631449332 }, { "year": "7-2021", "value": 0.740660725 }, { "year": "8-2021", "value": 0.79978105 }, { "year": "9-2021", "value": 0.81462701 }, { "year": "10-2021", "value": 0.829941872 }, { "year": "11-2021", "value": 0.837711684 }, { "year": "12-2021", "value": 0.844553381 }, { "year": "1-2022", "value": 0.874309242 }]
var icuDataMalta = [{ "year": "1-2021", "value": 0.232732733 }, { "year": "2-2021", "value": 0.245338567 }, { "year": "3-2021", "value": 0.20804769 }, { "year": "4-2021", "value": 0.238496933 }, { "year": "5-2021", "value": 0.266958425 }, { "year": "6-2021", "value": 0.048387097 }, { "year": "7-2021", "value": 0.063157895 }, { "year": "8-2021", "value": 0.08537693 }, { "year": "9-2021", "value": 0.12568306 }, { "year": "10-2021", "value": 0.082608696 }, { "year": "11-2021", "value": 0.146616541 }, { "year": "12-2021", "value": 0.099385246 }, { "year": "1-2022", "value": 0.049154542 }]
var deathDataMalta = [{ "year": "1-2021", "value": 0.009358549 }, { "year": "2-2021", "value": 0.010482638 }, { "year": "3-2021", "value": 0.011753931 }, { "year": "4-2021", "value": 0.016679905 }, { "year": "5-2021", "value": 0.024691358 }, { "year": "6-2021", "value": 0.011363636 }, { "year": "7-2021", "value": 0.000816993 }, { "year": "8-2021", "value": 0.009594883 }, { "year": "9-2021", "value": 0.016359918 }, { "year": "10-2021", "value": 0.007936508 }, { "year": "11-2021", "value": 0.003928171 }, { "year": "12-2021", "value": 0.000613591 }, { "year": "1-2022", "value": 0.004854369 }]

var vaccDataUK = [{ "year": "1-2021", "value": 0.00724571 }, { "year": "2-2021", "value": 0.011960864 }, { "year": "3-2021", "value": 0.066172834 }, { "year": "4-2021", "value": 0.219292565 }, { "year": "5-2021", "value": 0.377302564 }, { "year": "6-2021", "value": 0.484527157 }, { "year": "7-2021", "value": 0.561850059 }, { "year": "8-2021", "value": 0.629113072 }, { "year": "9-2021", "value": 0.658315964 }, { "year": "10-2021", "value": 0.670199167 }, { "year": "11-2021", "value": 0.680270771 }, { "year": "12-2021", "value": 0.695444334 }, { "year": "1-2022", "value": 0.710201182 }]
var icuDataUK = [{ "year": "1-2021", "value": 0.099379401 }, { "year": "2-2021", "value": 0.128741077 }, { "year": "3-2021", "value": 0.142905794 }, { "year": "4-2021", "value": 0.146633094 }, { "year": "5-2021", "value": 0.135410783 }, { "year": "6-2021", "value": 0.156732318 }, { "year": "7-2021", "value": 0.141734385 }, { "year": "8-2021", "value": 0.143243026 }, { "year": "9-2021", "value": 0.127331332 }, { "year": "10-2021", "value": 0.108720305 }, { "year": "11-2021", "value": 0.114052672 }, { "year": "12-2021", "value": 0.103518017 }, { "year": "1-2022", "value": 0.039959436 }]
var deathDataUK = [{ "year": "1-2021", "value": 0.024589104 }, { "year": "2-2021", "value": 0.046370139 }, { "year": "3-2021", "value": 0.022829189 }, { "year": "4-2021", "value": 0.011348078 }, { "year": "5-2021", "value": 0.003746271 }, { "year": "6-2021", "value": 0.001139579 }, { "year": "7-2021", "value": 0.0014221 }, { "year": "8-2021", "value": 0.003096773 }, { "year": "9-2021", "value": 0.00405388 }, { "year": "10-2021", "value": 0.003174897 }, { "year": "11-2021", "value": 0.003673239 }, { "year": "12-2021", "value": 0.001347089 }, { "year": "1-2022", "value": 0.002013408 }]

var vaccDataSlovakia = [{ "year": "1-2021", "value": 0.005978048 }, { "year": "2-2021", "value": 0.033361716 }, { "year": "3-2021", "value": 0.049445889 }, { "year": "4-2021", "value": 0.094781503 }, { "year": "5-2021", "value": 0.183658545 }, { "year": "6-2021", "value": 0.314410371 }, { "year": "7-2021", "value": 0.389663753 }, { "year": "8-2021", "value": 0.420031123 }, { "year": "9-2021", "value": 0.437066249 }, { "year": "10-2021", "value": 0.451007566 }, { "year": "11-2021", "value": 0.467639702 }, { "year": "12-2021", "value": 0.489485748 }, { "year": "1-2022", "value": 0.499900354 }]
var icuDataSlovakia = [{ "year": "1-2021", "value": 0.078814034 }, { "year": "2-2021", "value": 0.08097707 }, { "year": "3-2021", "value": 0.090929407 }, { "year": "4-2021", "value": 0.096554406 }, { "year": "5-2021", "value": 0.115355937 }, { "year": "6-2021", "value": 0.107320418 }, { "year": "7-2021", "value": 0.120022124 }, { "year": "8-2021", "value": 0.12345679 }, { "year": "9-2021", "value": 0.137386769 }, { "year": "10-2021", "value": 0.113837547 }, { "year": "11-2021", "value": 0.093062649 }, { "year": "12-2021", "value": 0.089563897 }, { "year": "1-2022", "value": 0.056857639 }]
var deathDataSlovakia = [{ "year": "1-2021", "value": 0.015513001 },{ "year": "2-2021", "value": 0.016684681 },{ "year": "3-2021", "value": 0.021223942 },{ "year": "4-2021", "value": 0.042530626 },{ "year": "5-2021", "value": 0.038924985 },{ "year": "6-2021", "value": 0.041718711 },{ "year": "7-2021", "value": 0.020935101 },{ "year": "8-2021", "value": 0.002407463 },{ "year": "9-2021", "value": 0.003617151 },{ "year": "10-2021", "value": 0.004198659 },{ "year": "11-2021", "value": 0.005101853 },{ "year": "12-2021", "value": 0.01103633 },{ "year": "1-2022", "value": 0.006028746 }]

function vaccChart(countryChart, dataset) {
    var greyColor = "#898989";
    var barColor = d3.interpolateInferno(0.4);
    var highlightColor = d3.interpolateInferno(0.3);

    var formatPercent = d3.format(".0%");

    var svg = d3.select(countryChart).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.selectAll("div")
        .attr("align", "left");

    let title = svg.append('text')
        .attr('class', 'title')
        .attr('y', 14)
        .attr("transform", "translate(" + margin.left + "," + -30 + ")")
        .html('Percentage of fully vaccinated population');

    var x = d3.scaleBand()
        .range([0, width * 1.5])
        .padding(0.4);
    var y = d3.scaleLinear()
        .range([height, 0]);

    var xAxis = d3.axisBottom(x).tickSize([]).tickPadding(10);
    var yAxis = d3.axisLeft(y).tickFormat(formatPercent);

    x.domain(dataset.map(d => { return d.year; }));
    // y.domain([0, d3.max(dataset,  d => { return d.value; })]);
    y.domain([0, 1]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg.selectAll(".bar")
        .data(dataset)
        .enter().append("rect")
        .attr("class", "bar")
        .style("display", d => { return d.value === null ? "none" : null; })
        .style("fill", d => {
            return d.value === d3.max(dataset, d => { return d.value; })
                ? highlightColor : barColor
        })
        .attr("x", d => { return x(d.year); })
        .attr("width", x.bandwidth())
        .attr("y", d => { return height; })
        .attr("height", 0)
        .transition()
        .duration(750)
        .delay(function (d, i) {
            return i * 150;
        })
        .attr("y", d => { return y(d.value); })
        .attr("height", d => { return height - y(d.value); });

    svg.selectAll(".label")
        .data(dataset)
        .enter()
        .append("text")
        .attr("class", "label")
        .style("display", d => { return d.value === null ? "none" : null; })
        .attr("x", (d => { return x(d.year) + (x.bandwidth() / 2) - 8; }))
        .style("fill", d => {
            return d.value === d3.max(dataset, d => { return d.value; })
                ? highlightColor : greyColor
        })
        .attr("y", d => { return height; })
        .attr("height", 0)
        .transition()
        .duration(750)
        .delay((d, i) => { return i * 150; })
        .text(d => { return formatPercent(d.value); })
        .attr("y", d => { return y(d.value) + .1; })
        .attr("dy", "-.7em");
}

function icuChart(countryChart, dataset) {
    var margin = { top: 40, right: 150, bottom: 100, left: 50 },
        width = 460 - margin.left - margin.right + 50,
        height = 320 - margin.top - margin.bottom;

    var greyColor = "#898989";
    var barColor = d3.interpolateInferno(0.4);
    var highlightColor = d3.interpolateInferno(0.3);

    var formatPercent = d3.format(".0%");

    var svg = d3.select(countryChart).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let title = svg.append('text')
        .attr('class', 'title')
        .attr('y', 14)
        .attr("transform", "translate(" + margin.left + "," + -30 + ")")
        .html('Percentage of icu in hospital admissions');

    var x = d3.scaleBand()
        .range([0, width * 1.5])
        .padding(0.4);
    var y = d3.scaleLinear()
        .range([height, 0]);

    var xAxis = d3.axisBottom(x).tickSize([]).tickPadding(10);
    var yAxis = d3.axisLeft(y).tickFormat(formatPercent);


    x.domain(dataset.map(d => { return d.year; }));
    // y.domain([0, d3.max(dataset,  d => { return d.value; })]);
    y.domain([0, 1]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg.selectAll(".bar")
        .data(dataset)
        .enter().append("rect")
        .attr("class", "bar")
        .style("display", d => { return d.value === null ? "none" : null; })
        .style("fill", d => {
            return d.value === d3.max(dataset, d => { return d.value; })
                ? highlightColor : barColor
        })
        .attr("x", d => { return x(d.year); })
        .attr("width", x.bandwidth())
        .attr("y", d => { return height; })
        .attr("height", 0)
        .transition()
        .duration(750)
        .delay(function (d, i) {
            return i * 150;
        })
        .attr("y", d => { return y(d.value); })
        .attr("height", d => { return height - y(d.value); });

    svg.selectAll(".label")
        .data(dataset)
        .enter()
        .append("text")
        .attr("class", "label")
        .style("display", d => { return d.value === null ? "none" : null; })
        .attr("x", (d => { return x(d.year) + (x.bandwidth() / 2) - 8; }))
        .style("fill", d => {
            return d.value === d3.max(dataset, d => { return d.value; })
                ? highlightColor : greyColor
        })
        .attr("y", d => { return height; })
        .attr("height", 0)
        .transition()
        .duration(750)
        .delay((d, i) => { return i * 150; })
        .text(d => { return formatPercent(d.value); })
        .attr("y", d => { return y(d.value) + .1; })
        .attr("dy", "-.7em");

}

function deathChart(countryChart, dataset) {
    var margin = { top: 40, right: 150, bottom: 100, left: 60 },
        width = 460 - margin.left - margin.right + 50,
        height = 320 - margin.top - margin.bottom;

    var greyColor = "#898989";
    var barColor = d3.interpolateInferno(0.4);
    var highlightColor = d3.interpolateInferno(0.3);

    var formatPercent = d3.format(".0%");

    var svg = d3.select(countryChart).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let title = svg.append('text')
        .attr('class', 'title')
        .attr('y', 14)
        .attr("transform", "translate(" + margin.left + "," + -30 + ")")
        .html('Percentage of deaths in infected');

    var x = d3.scaleBand()
        .range([0, width * 1.5])
        .padding(0.4);
    var y = d3.scaleLinear()
        .range([height, 0]);

    var xAxis = d3.axisBottom(x).tickSize([]).tickPadding(10);
    var yAxis = d3.axisLeft(y).tickFormat(formatPercent);

    x.domain(dataset.map(d => { return d.year; }));
    // y.domain([0, d3.max(dataset,  d => { return d.value; })]);
    y.domain([0, 0.15]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg.selectAll(".bar")
        .data(dataset)
        .enter().append("rect")
        .attr("class", "bar")
        .style("display", d => { return d.value === null ? "none" : null; })
        .style("fill", d => {
            return d.value === d3.max(dataset, d => { return d.value; })
                ? highlightColor : barColor
        })
        .attr("x", d => { return x(d.year); })
        .attr("width", x.bandwidth())
        .attr("y", d => { return height; })
        .attr("height", 0)
        .transition()
        .duration(750)
        .delay(function (d, i) {
            return i * 150;
        })
        .attr("y", d => { return y(d.value); })
        .attr("height", d => { return height - y(d.value); });

    svg.selectAll(".label")
        .data(dataset)
        .enter()
        .append("text")
        .attr("class", "label")
        .style("display", d => { return d.value === null ? "none" : null; })
        .attr("x", (d => { return x(d.year) + (x.bandwidth() / 2) - 8; }))
        .style("fill", d => {
            return d.value === d3.max(dataset, d => { return d.value; })
                ? highlightColor : greyColor
        })
        .attr("y", d => { return height; })
        .attr("height", 0)
        .transition()
        .duration(750)
        .delay((d, i) => { return i * 150; })
        .text(d => { return formatPercent(d.value); })
        .attr("y", d => { return y(d.value) + .1; })
        .attr("dy", "-.7em");
}

vaccChart("#chartBulgaria1", vaccDataBulgaria);
icuChart("#chartBulgaria2", icuDataBulgaria);
deathChart("#chartBulgaria3", deathDataBulgaria);

vaccChart("#chartFrance1", vaccDataFrance);
icuChart("#chartFrance2", icuDataFrance);
deathChart("#chartFrance3", deathDataFrance);

vaccChart("#chartGermany1", vaccDataGermany);
icuChart("#chartGermany2", icuDataGermany);
deathChart("#chartGermany3", deathDataGermany);

vaccChart("#chartItaly1", vaccDataItaly);
icuChart("#chartItaly2", icuDataItaly);
deathChart("#chartItaly3", deathDataItaly);

vaccChart("#chartMalta1", vaccDataMalta);
icuChart("#chartMalta2", icuDataMalta);
deathChart("#chartMalta3", deathDataMalta);

vaccChart("#chartUK1", vaccDataUK);
icuChart("#chartUK2", icuDataUK);
deathChart("#chartUK3", deathDataUK);

vaccChart("#chartSlovakia1", vaccDataSlovakia);
icuChart("#chartSlovakia2", icuDataSlovakia);
deathChart("#chartSlovakia3", deathDataSlovakia);
