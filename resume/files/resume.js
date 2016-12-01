(function() {
  var loader, onReady;

  onReady = function() {
    var Item, dateFormat, items, maxTime, minTime, scale, svg, svgHeight, svgWidth, type, yearTicks, _i, _len, _ref;
    dateFormat = d3.time.format('%Y-%m-%d');
    items = [];
    Item = (function() {
      function Item(type, element) {
        var dtend, dtstart, offsetContainer, offsetHeight, offsetTop;
        this.type = type;
        this.element = element;
        offsetTop = d3.select(this.element).select('.date').node().offsetTop;
        offsetHeight = d3.select(this.element).select('.date').node().offsetHeight;
        offsetContainer = d3.select(this.element).node().offsetParent.offsetTop;
        this.textY = offsetTop + offsetHeight / 2 + offsetContainer;
        dtstart = d3.select(this.element).select('.dtstart').attr('title');
        this.dtstart = dateFormat.parse(dtstart);
        if (d3.select(this.element).select('.dtend').node()) {
          dtend = d3.select(this.element).select('.dtend').attr('title');
          this.dtend = dateFormat.parse(dtend);
        }
        this.summary = d3.select(this.element).select('.summary').text().trim();
      }

      return Item;

    })();
    _ref = ['experience', 'education', 'awards', 'publications'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      type = _ref[_i];
      d3.selectAll("." + type + " .vevent").each(function() {
        return items.push(new Item(type, this));
      });
    }
    svgHeight = d3.max(d3.selectAll('.sections')[0], function(s) {
      return s.offsetHeight;
    });
    svgWidth = d3.select('.hresume').node().offsetWidth;
    svg = d3.select('.hresume').append('svg').style('height', svgHeight + 'px').style('width', svgWidth + 'px').style('position', 'absolute').style('left', 0).style('z-index', -1);
    minTime = d3.min(items, function(item) {
      return item.dtstart;
    });
    maxTime = d3.max(items, function(item) {
      return item.dtend;
    });
    scale = d3.time.scale().domain([minTime, maxTime]).range([svgHeight - 10, 50]);
    items.forEach(function(item) {
      var size, x, x1, x2, xCenter, xOffset1, xOffset2, y1, y2, y3, _ref1, _ref2;
      if (item.summary === 'University of Waterloo' || item.summary === 'Stanford University') {
        xOffset2 = 1;
      } else {
        xOffset2 = -1;
      }
      if (item.type === 'experience') {
        xOffset1 = -1;
      } else {
        xOffset1 = 1;
      }
      xCenter = svgWidth / 2;
      x1 = xCenter + 45 * xOffset1;
      y1 = item.textY;
      x2 = xCenter + 20 * xOffset2;
      y2 = Math.round(scale(item.dtstart));
      if ((_ref1 = item.type) === 'experience' || _ref1 === 'education') {
        y3 = Math.round(scale(item.dtend));
        svg.append('polygon').attr('points', "" + x1 + "," + y1 + " " + x2 + "," + y2 + " " + x2 + "," + y3);
        svg.append('line').attr('x1', x2).attr('x2', x2).attr('y1', y2).attr('y2', y3).classed(item.type, true);
      }
      if ((_ref2 = item.type) === 'awards' || _ref2 === 'publications') {
        console.log(item);
        x = xCenter + 8;
        size = 4;
        svg.append('line').attr('x1', x1).attr('y1', y1).attr('x2', x).attr('y2', y2).classed(item.type, true);
        return svg.append('rect').attr('x', x - size / 2).attr('y', y2 - size / 2).attr('height', size).attr('width', size).classed(item.type, true);
      }
    });
    yearTicks = scale.ticks(d3.time.years);
    return yearTicks.forEach(function(tick) {
      var transform;
      transform = "translate(" + (svgWidth / 2 - 8) + "," + (scale(tick)) + ")rotate(-90)";
      svg.append('text').attr('transform', transform).text(tick.getFullYear()).attr('fill', 'none').attr('stroke', 'white').attr('stroke-width', 3);
      return svg.append('text').attr('transform', transform).text(tick.getFullYear()).attr('fill', '#555');
    });
  };

  loader = WebFont.load({
    google: {
      families: ['Alef:400,700:latin']
    },
    active: onReady
  });

}).call(this);
