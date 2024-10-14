document.addEventListener('DOMContentLoaded', function() {
    const minutesSelect = document.getElementById('minutes');
    const mbSelect = document.getElementById('mb');
    const preview = document.getElementById('preview');
    const payButton = document.getElementById('payButton');

    function updatePreview() {
        const selectedMinutes = minutesSelect.value;
        const selectedMB = mbSelect.value;
        preview.innerHTML = `আপনি ${selectedMinutes} মিনিট এবং ${selectedMB} এমবি নির্বাচন করেছেন।`;
    }

    minutesSelect.addEventListener('change', updatePreview);
    mbSelect.addEventListener('change', updatePreview);

    payButton.addEventListener('click', function() {
        alert('পেমেন্ট প্রক্রিয়া শুরু হচ্ছে...');
        // এখানে পেমেন্ট প্রক্রিয়া যুক্ত করুন
    });

    // প্রথমবার লোড হলে প্রিভিউ আপডেট করুন
    updatePreview();
});
