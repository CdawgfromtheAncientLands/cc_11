        // Data
        const dataset = [100, 420, 230, 850, 560, 925];

        // Dimensions
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const width = 500 - margin.left - margin.right;
        const barHeight = 20;
        const barMargin = 1;
        const height = (barHeight + barMargin) * dataset.length;

        // Create SVG container
        const svg = d3.select("body")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);