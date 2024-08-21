export const SIDEBAR_MENU = [
    {
        link: 'fitness',
        label: { id: 'Kebugaran', en: 'Fitness' },
        title: { id: 'Kategori Kebugaran', en: 'Fitness Category' },
        icon: null, // Category tidak memerlukan ikon khusus
        type: 'category'
    },
    {
        link: 'fitness/bmi-calculator',
        label: { id: 'Kalkulator BMI', en: 'BMI Calculator' },
        title: { id: 'Hitung Indeks Massa Tubuh', en: 'Calculate Body Mass Index' },
        icon: 'fa-weight-scale',
        type: 'menu'
    },
    {
        link: 'fitness/calorie-calculator',
        label: { id: 'Kalkulator Kalori', en: 'Calorie Calculator' },
        title: { id: 'Hitung Kalori Harian', en: 'Calculate Daily Calorie' },
        icon: 'fa-utensils',
        type: 'menu'
    },
    {
        link: 'fitness/body-fat-calculator',
        label: { id: 'Kalkulator Lemak Tubuh', en: 'Body Fat Calculator' },
        title: { id: 'Hitung Persentase Lemak Tubuh', en: 'Calculate Body Fat Percentage' },
        icon: 'fa-percent',
        type: 'menu'
    },
    {
        link: 'fitness/ideal-weight-calculator',
        label: { id: 'Kalkulator Berat Ideal', en: 'Ideal Weight Calculator' },
        title: { id: 'Hitung Berat Badan Ideal', en: 'Calculate Ideal Body Weight' },
        icon: 'fa-balance-scale',
        type: 'menu'
    },
    {
        link: 'fitness/pace-calculator',
        label: { id: 'Kalkulator Kecepatan', en: 'Pace Calculator' },
        title: { id: 'Hitung Kecepatan Berlari', en: 'Calculate Running Pace' },
        icon: 'fa-running',
        type: 'menu'
    },
    {
        link: 'fitness/army-body-fat-calculator',
        label: { id: 'Kalkulator Lemak Tubuh Militer', en: 'Army Body Fat Calculator' },
        title: { id: 'Hitung Lemak Tubuh dengan Standar Militer', en: 'Calculate Body Fat with Military Standard' },
        icon: 'fa-user-tie',
        type: 'menu'
    },
    {
        link: 'fitness/lean-body-mass-calculator',
        label: { id: 'Kalkulator Massa Tubuh Ramping', en: 'Lean Body Mass Calculator' },
        title: { id: 'Hitung Massa Tubuh Ramping', en: 'Calculate Lean Body Mass' },
        icon: 'fa-dumbbell',
        type: 'menu'
    },
    {
        link: 'fitness/healthy-weight-calculator',
        label: { id: 'Kalkulator Berat Sehat', en: 'Healthy Weight Calculator' },
        title: { id: 'Hitung Berat Badan Sehat', en: 'Calculate Healthy Weight' },
        icon: 'fa-heartbeat',
        type: 'menu'
    },
    {
        link: 'fitness/calories-burned-calculator',
        label: { id: 'Kalkulator Kalori Terbakar', en: 'Calories Burned Calculator' },
        title: { id: 'Hitung Kalori yang Terbakar', en: 'Calculate Calories Burned' },
        icon: 'fa-fire',
        type: 'menu'
    },
    {
        link: 'pregnancy',
        label: { id: 'Kehamilan', en: 'Pregnancy' },
        title: { id: 'Kategori Kehamilan', en: 'Pregnancy Category' },
        icon: null,
        type: 'category'
    },
    {
        link: 'pregnancy/pregnancy-calculator',
        label: { id: 'Kalkulator Kehamilan', en: 'Pregnancy Calculator' },
        title: { id: 'Hitung Perkembangan Kehamilan', en: 'Calculate Pregnancy Progress' },
        icon: 'fa-baby',
        type: 'menu'
    },
    {
        link: 'pregnancy/pregnancy-weight-gain-calculator',
        label: { id: 'Kalkulator Kenaikan Berat Kehamilan', en: 'Pregnancy Weight Gain Calculator' },
        title: { id: 'Hitung Kenaikan Berat Badan Selama Kehamilan', en: 'Calculate Pregnancy Weight Gain' },
        icon: 'fa-weight',
        type: 'menu'
    },
    {
        link: 'pregnancy/pregnancy-conception-calculator',
        label: { id: 'Kalkulator Konsepsi Kehamilan', en: 'Pregnancy Conception Calculator' },
        title: { id: 'Hitung Tanggal Konsepsi', en: 'Calculate Conception Date' },
        icon: 'fa-venus',
        type: 'menu'
    },
    {
        link: 'pregnancy/due-date-calculator',
        label: { id: 'Kalkulator Tanggal Jatuh Tempo', en: 'Due Date Calculator' },
        title: { id: 'Hitung Tanggal Perkiraan Lahir', en: 'Calculate Estimated Due Date' },
        icon: 'fa-calendar-alt',
        type: 'menu'
    },
    {
        link: 'pregnancy/ovulation-calculator',
        label: { id: 'Kalkulator Ovulasi', en: 'Ovulation Calculator' },
        title: { id: 'Hitung Masa Subur', en: 'Calculate Ovulation Period' },
        icon: 'fa-egg',
        type: 'menu'
    },
    {
        link: 'pregnancy/conception-calculator',
        label: { id: 'Kalkulator Konsepsi', en: 'Conception Calculator' },
        title: { id: 'Hitung Tanggal Konsepsi', en: 'Calculate Conception Date' },
        icon: 'fa-stethoscope',
        type: 'menu'
    },
    {
        link: 'pregnancy/period-calculator',
        label: { id: 'Kalkulator Periode', en: 'Period Calculator' },
        title: { id: 'Hitung Siklus Menstruasi', en: 'Calculate Menstrual Cycle' },
        icon: 'fa-calendar-check',
        type: 'menu'
    },
    {
        link: 'others',
        label: { id: 'Lainnya', en: 'Others' },
        title: { id: 'Kategori Lainnya', en: 'Others Category' },
        icon: null,
        type: 'category'
    },
    {
        link: 'others/macro-calculator',
        label: { id: 'Kalkulator Makro', en: 'Macro Calculator' },
        title: { id: 'Hitung Makronutrien', en: 'Calculate Macronutrients' },
        icon: 'fa-chart-pie',
        type: 'menu'
    },
    {
        link: 'others/carbohydrate-calculator',
        label: { id: 'Kalkulator Karbohidrat', en: 'Carbohydrate Calculator' },
        title: { id: 'Hitung Asupan Karbohidrat', en: 'Calculate Carbohydrate Intake' },
        icon: 'fa-bread-slice',
        type: 'menu'
    },
    {
        link: 'others/protein-calculator',
        label: { id: 'Kalkulator Protein', en: 'Protein Calculator' },
        title: { id: 'Hitung Asupan Protein', en: 'Calculate Protein Intake' },
        icon: 'fa-drumstick-bite',
        type: 'menu'
    },
    {
        link: 'others/fat-intake-calculator',
        label: { id: 'Kalkulator Asupan Lemak', en: 'Fat Intake Calculator' },
        title: { id: 'Hitung Asupan Lemak', en: 'Calculate Fat Intake' },
        icon: 'fa-bacon',
        type: 'menu'
    },
    {
        link: 'others/body-type-calculator',
        label: { id: 'Kalkulator Tipe Tubuh', en: 'Body Type Calculator' },
        title: { id: 'Hitung Tipe Tubuh', en: 'Calculate Body Type' },
        icon: 'fa-user-circle',
        type: 'menu'
    },
    {
        link: 'others/body-surface-area-calculator',
        label: { id: 'Kalkulator Area Permukaan Tubuh', en: 'Body Surface Area Calculator' },
        title: { id: 'Hitung Area Permukaan Tubuh', en: 'Calculate Body Surface Area' },
        icon: 'fa-ruler',
        type: 'menu'
    },
    {
        link: 'others/check',
        label: { id: 'Periksa', en: 'Check' },
        title: { id: 'Periksa Kesehatan', en: 'Health Check' },
        icon: 'fa-check-circle',
        type: 'menu'
    },
    {
        link: 'others/stress',
        label: { id: 'Stres', en: 'Stress' },
        title: { id: 'Periksa Tingkat Stres', en: 'Check Stress Level' },
        icon: 'fa-brain',
        type: 'menu'
    },
    {
        link: 'others/risiko-diabetes',
        label: { id: 'Risiko Diabetes', en: 'Diabetes Risk' },
        title: { id: 'Periksa Risiko Diabetes', en: 'Check Diabetes Risk' },
        icon: 'fa-syringe',
        type: 'menu'
    },
    {
        link: 'others/resiko-jantung',
        label: { id: 'Risiko Jantung', en: 'Heart Risk' },
        title: { id: 'Periksa Risiko Jantung', en: 'Check Heart Risk' },
        icon: 'fa-heart',
        type: 'menu'
    }
];
