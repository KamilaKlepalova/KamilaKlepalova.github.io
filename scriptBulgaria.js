function vaccChart() {
    var margin = { top: 40, right: 150, bottom: 100, left: 60 },
        width = 460 - margin.left - margin.right + 50,
        height = 320 - margin.top - margin.bottom;

    var greyColor = "#898989";
    var barColor = d3.interpolateInferno(0.4);
    var highlightColor = d3.interpolateInferno(0.3);

    var formatPercent = d3.format(".0%");

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let title = svg.append('text')
        .attr('class', 'title')
        .attr('y', 14)
        .attr("transform", "translate(" + margin.left + "," + -30 + ")")
        .html('Bulgaria - percentage of fully vaccinated population');

    var x = d3.scaleBand()
        .range([0, width * 1.5])
        .padding(0.4);
    var y = d3.scaleLinear()
        .range([height, 0]);

    var xAxis = d3.axisBottom(x).tickSize([]).tickPadding(10);
    var yAxis = d3.axisLeft(y).tickFormat(formatPercent);

    var dataset = [{ "year": "1-2021", "value": 0.001897152},
                    { "year": "2-2021", "value": 0.005419874},
                    { "year": "3-2021", "value": 0.013775229},
                    { "year": "4-2021", "value": 0.030935867},
                    { "year": "5-2021", "value": 0.081254608},
                    { "year": "6-2021", "value": 0.116791836},
                    { "year": "7-2021", "value": 0.144980139},
                    { "year": "8-2021", "value": 0.169964135},
                    { "year": "9-2021", "value": 0.192875967},
                    { "year": "10-2021", "value": 0.219110569},
                    { "year": "11-2021", "value": 0.256968052},
                    { "year": "12-2021", "value": 0.277657792},
                    { "year": "1-2022", "value": 0.289485845}]

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

function icuChart() {
    var margin = { top: 40, right: 150, bottom: 100, left: 50 },
        width = 460 - margin.left - margin.right + 50,
        height = 320 - margin.top - margin.bottom;

    var greyColor = "#898989";
    var barColor = d3.interpolateInferno(0.4);
    var highlightColor = d3.interpolateInferno(0.3);

    var formatPercent = d3.format(".0%");

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let title = svg.append('text')
        .attr('class', 'title')
        .attr('y', 14)
        .attr("transform", "translate(" + margin.left + "," + -30 + ")")
        .html('Bulgaria - percentage of icu in hospital admissions');

    var x = d3.scaleBand()
        .range([0, width * 1.5])
        .padding(0.4);
    var y = d3.scaleLinear()
        .range([height, 0]);

    var xAxis = d3.axisBottom(x).tickSize([]).tickPadding(10);
    var yAxis = d3.axisLeft(y).tickFormat(formatPercent);

    // var dataset = [{"year":"2014", "value": .07},
    //                 {"year":"2015", "value": .13},
    //                 {"year":"2016", "value": .56},
    //                 {"year":"2017", "value": .95},
    //                 {"year":"2018", "value": .81}];
    var dataset = [{ "year": "1-2021", "value": 0.094853371},
                    { "year": "2-2021", "value": 0.086693261},
                    { "year": "3-2021", "value": 0.080006657},
                    { "year": "4-2021", "value": 0.082579774},
                    { "year": "5-2021", "value": 0.102357696},
                    { "year": "6-2021", "value": 0.114231386},
                    { "year": "7-2021", "value": 0.115993099},
                    { "year": "8-2021", "value": 0.087681372},
                    { "year": "9-2021", "value": 0.083235324},
                    { "year": "10-2021", "value": 0.086390421},
                    { "year": "11-2021", "value": 0.096875419},
                    { "year": "12-2021", "value": 0.114328588},
                    { "year": "1-2022", "value": 0.103477021}]

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

function deathChart() {
    var margin = { top: 40, right: 150, bottom: 100, left: 60 },
        width = 460 - margin.left - margin.right + 50,
        height = 320 - margin.top - margin.bottom;

    var greyColor = "#898989";
    var barColor = d3.interpolateInferno(0.4);
    var highlightColor = d3.interpolateInferno(0.3);

    var formatPercent = d3.format(".0%");

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let title = svg.append('text')
        .attr('class', 'title')
        .attr('y', 14)
        .attr("transform", "translate(" + margin.left + "," + -30 + ")")
        .html('Bulgaria - percentage of deaths in infected');

    var x = d3.scaleBand()
        .range([0, width * 1.5])
        .padding(0.4);
    var y = d3.scaleLinear()
        .range([height, 0]);

    var xAxis = d3.axisBottom(x).tickSize([]).tickPadding(10);
    var yAxis = d3.axisLeft(y).tickFormat(formatPercent);

    var dataset = [{ "year": "1-2021", "value": 0.089127533},
                    { "year": "2-2021", "value": 0.040509014},
                    { "year": "3-2021", "value": 0.031445159},
                    { "year": "4-2021", "value": 0.05185677},
                    { "year": "5-2021", "value": 0.091639079},
                    { "year": "6-2021", "value": 0.11100861},
                    { "year": "7-2021", "value": 0.047131783},
                    { "year": "8-2021", "value": 0.022256257},
                    { "year": "9-2021", "value": 0.042783283},
                    { "year": "10-2021", "value": 0.031067477},
                    { "year": "11-2021", "value": 0.048117539},
                    { "year": "12-2021", "value": 0.048068241},
                    { "year": "1-2022", "value": 0.011534876}]

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

icuChart();
vaccChart();
deathChart();