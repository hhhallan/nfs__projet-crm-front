/* * * * * * * * * * *
*  test
* * * * * * * * * * * */

export const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Sales',
        data: [25, 20, 30, 35, 40, 45],
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        borderColor: 'rgba(0, 0, 255, 1)'
    }]
};

export const lineChartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Line Chart',
            font: {
                family: "Poppins"
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};

export const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Revenue',
        data: [25, 20, 30, 35, 40, 45],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)'
    }]
};

export const barChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Bar Chart',
            font: {
                family: "Poppins"
            }
        },
    },
};

/* * * * * * * * * * *
*  Devis & Factures - BAR
* * * * * * * * * * * */
export const devisFactureOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Devis / Factures',
            font: {
                family: "Poppins"
            }
        },
    },
};

export const devisFactureData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Devis',
            data: [8, 7.8, 6, 8, 7, 5, 6],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Facture',
            data: [8, 7.8, 6, 8, 7, 5, 6],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

/* * * * * * * * * * *
*  test - Line
* * * * * * * * * * * */
export const testLineData = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18", ],
    datasets: [{
        data: [8, 7.8, 6, 8, 7, 5, 6],
        backgroundColor: 'transparent',
        borderColor: 'red',
        pointBorderColor: 'green',
        pointBorderWidth: 4,
        tension: 0.5
    }]
};
export const testLineOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Devis / Factures',
            font: {
                family: "Poppins"
            }
        },
    }
};