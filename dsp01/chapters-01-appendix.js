window.DSP_CHAPTERS = [
  {
    id: 1,
    title: "Nhập môn xử lý tín hiệu số",
    en: "Introduction",
    pages: "1–42",
    group: "Nền tảng",
    intro: "Theo dõi một tín hiệu từ lúc còn là điện áp của micro đến lúc được lưu thành dãy bit. Chương này đặt nền cho hai câu hỏi xuất hiện xuyên suốt môn học: đo lúc nào và giữ lại được thông tin gì?",
    topics: [
      {
        title: "Tín hiệu, hệ thống và chuỗi ADC → DSP → DAC",
        body: "Tín hiệu mang thông tin; hệ thống biến tín hiệu đầu vào thành đầu ra. Ví dụ, bộ lọc có thể nhận bản thu có tiếng quạt rồi giảm phần năng lượng ở vùng tần số của quạt. ADC đổi tín hiệu tương tự sang số, bộ xử lý làm việc trên dãy số và DAC tạo tín hiệu điện để phát ra loa.",
        formula: "xₐ(t) → lấy mẫu → x[n] → lượng tử hóa → xq[n] → mã hóa → bit",
        note: "Lấy mẫu làm rời rạc thời gian. Lượng tử hóa làm rời rạc biên độ."
      },
      {
        title: "Phân loại tín hiệu",
        body: "Tín hiệu có thể liên tục hoặc rời rạc theo biến độc lập, và có thể liên tục hoặc rời rạc theo biên độ. Hai kênh âm thanh trái–phải là tín hiệu đa kênh; ảnh xám là tín hiệu hai chiều vì độ sáng phụ thuộc cả hàng lẫn cột. Tín hiệu tất định có dạng biết trước, còn nhiễu thường được mô tả bằng mô hình ngẫu nhiên.",
        note: "Số kênh và số chiều là hai đặc tính khác nhau. Một ảnh màu có thể vừa hai chiều vừa có ba kênh."
      },
      {
        title: "Sóng cos liên tục và chu kỳ",
        body: "A là biên độ, θ là pha tại t = 0. Một vòng là 2π radian, nên tần số góc Ω tính bằng radian/giây bằng 2π lần tần số F tính bằng vòng/giây. Với F > 0, sau Tp giây góc tăng đúng một vòng và sóng trở về giá trị cũ.",
        formula: "xₐ(t) = A cos(2πFt + θ) = A cos(Ωt + θ)\nΩ = 2πF;  Tp = 1/F;  xₐ(t + Tp) = xₐ(t)",
        note: "Hình ở slide 11 thiếu π trong đối số của cos. Với F tính bằng Hz, dạng đúng là 2πFt."
      },
      {
        title: "Lấy mẫu đều và chỉ số mẫu",
        body: "Tại chỉ số nguyên n, bộ lấy mẫu đo tín hiệu ở thời điểm nTs. Tốc độ Fs là số mẫu trong một giây. Ví dụ, nếu Fs = 800 mẫu/giây thì Ts = 1,25 ms và mẫu n = 3 đo tại 3,75 ms.",
        formula: "Ts = 1/Fs\nx[n] = xₐ(nTs) = xₐ(n/Fs)",
        note: "n là chỉ số. nTs mới là thời điểm tính bằng giây."
      },
      {
        title: "Hz, vòng/mẫu, radian/mẫu và mẫu/chu kỳ",
        body: "Chia số vòng trong một giây cho số mẫu trong cùng một giây để biết góc quay tiến bao xa giữa hai mẫu, tính bằng vòng trên mẫu. Lấy nghịch đảo để biết một vòng của sóng liên tục dài bằng bao nhiêu khoảng lấy mẫu, thường gọi là mẫu trên chu kỳ.",
        formula: "f = F/Fs = Ts/Tp  [vòng/mẫu]\nω = 2πf = ΩTs  [radian/mẫu]\nTp/Ts = Fs/F = 1/f  [khoảng mẫu/vòng]\nx[n] = A cos(2πfn + θ) = A cos(ωn + θ)",
        note: "Fs/F có thể không nguyên. Khi đó, để dãy lặp đúng tại một chỉ số mẫu, có thể phải đi nhiều vòng."
      },
      {
        title: "Chu kỳ cơ bản của dãy mẫu",
        body: "Dãy tuần hoàn khi có một số nguyên dương N sao cho mọi x[n + N] bằng x[n]. Với sóng cos không suy biến, pha phải tăng đúng k vòng sau N bước. Nếu f = p/q đã tối giản, số bước nhỏ nhất là q. Nếu f vô tỉ, dãy không tuần hoàn.",
        formula: "x[n + N] = x[n] với mọi n\nωN = 2πk ⇔ fN = k,  k ∈ ℤ\nf = p/q tối giản ⇒ N₀ = q",
        note: "Ví dụ f = 3/8 cho chu kỳ dãy là 8 mẫu, tương ứng 3 vòng của sóng."
      },
      {
        title: "Chồng tần và giới hạn Nyquist",
        body: "Cộng một số nguyên vào f không làm đổi dãy cos vì 2πkn luôn là một số nguyên vòng. Khi quy về một khoảng đại diện, có thể chọn f trong [−1/2, 1/2) hoặc ω trong [−π, π). Với cos pha 0, tần số đối dấu cũng cho cùng giá trị. Đó là lý do một sóng trên Fs/2 có thể hiện ra như một sóng chậm hơn.",
        formula: "cos(2π(f + k)n + θ) = cos(2πfn + θ),  k ∈ ℤ\nF′ = F + kFs  ⇒  f′ = f + k\ncos(πn) = (−1)ⁿ",
        note: "Thử hai sóng cos 7 Hz và 1 Hz ở 8 mẫu/giây trong mô phỏng Lấy mẫu."
      },
      {
        title: "Định lý lấy mẫu và nội suy sinc",
        body: "Nếu tín hiệu giới hạn băng thông ở B Hz và Fs lớn hơn 2B, có thể khôi phục lý tưởng từ các mẫu đều chính xác. Mỗi mẫu làm hệ số của một hàm sinc đặt tâm tại thời điểm của mẫu. Tại tâm, sinc bằng 1; tại các tâm mẫu khác, sinc bằng 0.",
        formula: "Fs > 2B,  B = Fmax\nsinc(u) = sin(πu)/(πu),  sinc(0) = 1\nxₐ(t) = Σₙ x[n] sinc(Fs(t − nTs))",
        note: "2B là tốc độ Nyquist của tín hiệu. Fs/2 là tần số Nyquist của phép lấy mẫu. Nếu dùng sinc(2Bt) như slide 18 ở Fs > 2B, tổng cần nhân thêm 2B/Fs."
      },
      {
        title: "Lượng tử hóa, sai số và số bit",
        body: "Bộ lượng tử ánh xạ mẫu vào một tập mức hữu hạn. Nếu làm tròn tới mức gần nhất và mẫu nằm trong dải, sai số tối đa là nửa bước. Với L mức cách đều và tính cả hai đầu, ta chia khoảng biên độ thành L−1 phần.",
        formula: "xq[n] = Q(x[n]);  eq[n] = xq[n] − x[n]\n|eq[n]| ≤ Δ/2;  Δ = (xmax − xmin)/(L − 1)\nb = ⌈log₂ L⌉;  R = bFs bit/giây (một kênh, PCM thô)",
        note: "Nếu dải được định nghĩa theo ngưỡng của L ô lượng tử thay vì khoảng giữa hai mức ngoài cùng, bề rộng mỗi ô là dải/L. Hãy xem đề bài định nghĩa dải thế nào."
      },
      {
        title: "Nhiễu lượng tử hóa và DAC",
        body: "Nếu sai số xấp xỉ phân bố đều trên một bước lượng tử, phương sai là Δ²/12. Với sóng sin dùng hết dải của bộ lượng tử đều, mỗi bit tăng thêm cải thiện tỉ số tín hiệu trên nhiễu lượng tử khoảng 6 dB. Khi phát, DAC có thể giữ mẫu thành bậc thang rồi lọc để làm mượt.",
        formula: "Pq ≈ Δ²/12\nSQNR(dB) ≈ 6,02b + 1,76  (sóng sin toàn dải)\nxhold(t) = xq[n] với nTs ≤ t < (n+1)Ts",
        note: "Công thức SQNR là mô hình gần đúng trong điều kiện nêu trên, không mô tả sai số khi tín hiệu bị cắt đỉnh."
      },
      {
        title: "Euler và họa âm",
        body: "Một sóng cos có thể viết thành tổng của hai mũ phức quay ngược chiều nhau. Các họa âm dùng tần số là bội nguyên của cùng một tần số cơ sở. Với chu kỳ N mẫu, chỉ có N mũ phức khác nhau theo chỉ số k vì tăng k thêm N tạo lại cùng một dãy.",
        formula: "e^(jφ) = cos φ + j sin φ\ncos φ = (e^(jφ) + e^(−jφ))/2\nsₖ(t) = e^(j2πkF₀t);  sₖ[n] = e^(j2πkn/N)\ns_(k+N)[n] = sₖ[n]",
        note: "N là chu kỳ tính theo số mẫu. k là chỉ số họa âm."
      }
    ],
    example: {
      title: "Từ 300 Hz đến dãy cos rời rạc",
      steps: [
        "Cho xₐ(t) = 2 cos(600πt + π/3) và Fs = 800 mẫu/giây. Hệ số 600π là Ω, nên F = 600π/(2π) = 300 Hz.",
        "Ts = 1/800 giây và f = 300/800 = 3/8 vòng/mẫu. Suy ra ω = 3π/4 radian/mẫu.",
        "Dãy thu được là x[n] = 2 cos(3πn/4 + π/3). Mẫu đầu x[0] = 2 cos(π/3) = 1.",
        "3/8 đã tối giản, nên N₀ = 8 mẫu. Kiểm tra trực tiếp: sau 8 bước góc tăng (3π/4)·8 = 6π, tức đúng 3 vòng.",
        "Vì 800 > 2·300, phép lấy mẫu đáp ứng điều kiện Nyquist cho sóng này. Nếu chỉ lưu 8 bit mỗi mẫu thì dòng dữ liệu thô có tốc độ 6.400 bit/giây."
      ]
    },
    pitfalls: [
      "Đọc hệ số trước t là Ω (radian/giây), hệ số trước n là ω (radian/mẫu). Muốn đổi sang số vòng, chia cho 2π.",
      "1/f là số khoảng lấy mẫu trong một vòng của sóng, còn chu kỳ dãy phải là số nguyên. Khi f = 3/8, chu kỳ dãy là 8.",
      "Thêm bit giảm sai số lượng tử hóa. Để tránh chồng tần cần xét tần số đầu vào và tốc độ lấy mẫu."
    ],
    quiz: [
      {
        q: "Với x[n] = cos(5πn/6), dãy lặp lại sau ít nhất bao nhiêu mẫu?",
        options: ["6 mẫu", "12 mẫu", "12/5 mẫu"],
        answer: 1,
        why: "Đổi ω = 5π/6 sang f = ω/(2π) = 5/12. Phân số đã tối giản, nên chu kỳ cơ bản là 12."
      },
      {
        q: "Tín hiệu có Fmax = 60 Hz, ADC 3 bit và Fs = 100 mẫu/giây. Nhận định nào đúng?",
        options: ["Đủ tốc độ và có tối đa 8 mức", "Thiếu tốc độ và có tối đa 3 mức", "Thiếu tốc độ và có tối đa 8 mức"],
        answer: 2,
        why: "Cần Fs > 120 mẫu/giây theo điều kiện trong sách. Ba bit vẫn cho tối đa 2³ = 8 mã biên độ."
      }
    ]
  },
  {
    id: 14,
    title: "Sinh số ngẫu nhiên",
    en: "Appendix · Random Number Generators",
    pages: "981–986",
    group: "Phụ lục",
    intro: "Phụ lục này chỉ cách tạo tín hiệu nhiễu để mô phỏng một hệ DSP. Điểm xuất phát là bộ sinh đều trên (0, 1); phép biến đổi sẽ tạo phân bố cần dùng.",
    topics: [
      {
        title: "Dời và co giãn phân bố đều",
        body: "Nếu U lấy đều giữa 0 và 1, nhân với độ rộng b−a rồi cộng a sẽ trải các giá trị đều trên (a,b). Chọn khoảng đối xứng nếu muốn trung bình bằng 0.",
        formula: "U ∼ Uniform(0,1);  X = a + (b − a)U\nE[X] = (a + b)/2;  Var(X) = (b − a)²/12"
      },
      {
        title: "Hàm phân phối và biến đổi ngược",
        body: "F(x) là xác suất biến ngẫu nhiên nằm dưới hoặc bằng x. Nếu có công thức nghịch đảo của F, đưa một số đều U vào F⁻¹ để nhận một số có phân bố mong muốn.",
        formula: "F(x) = P(X ≤ x) = ∫ từ −∞ đến x p(t) dt\nX = F⁻¹(U)"
      },
      {
        title: "Từ phân bố đều đến Gaussian",
        body: "Lấy hai số đều độc lập. Số thứ nhất xác định bán kính và số thứ hai xác định góc. Hai tọa độ thu được có phân bố Gaussian độc lập với trung bình 0 và phương sai σ².",
        formula: "R = σ√(−2 ln U₁);  θ = 2πU₂\nX = R cos θ;  Y = R sin θ",
        note: "Cần 0 < U₁ < 1 để tránh ln(0). Cộng μ nếu muốn đổi trung bình sang μ."
      }
    ],
    example: {title: "Tạo nhiễu đều đối xứng", steps: [
      "Muốn nhiễu nằm giữa −0,2 và 0,2, lấy X = −0,2 + 0,4U.",
      "Nếu U = 0,75 thì X = 0,1. Kỳ vọng của cả phân bố là 0.",
      "Phương sai là 0,4²/12 ≈ 0,01333, hữu ích khi chọn công suất nhiễu trong mô phỏng."
    ]},
    pitfalls: ["Gaussian không có biên hữu hạn như phân bố đều.", "Tách các lần lấy U độc lập khi dùng phép biến đổi hai biến."],
    quiz: [{q: "Công thức nào tạo phân bố đều trên (−1,1) từ U đều trên (0,1)?", options: ["U − 1", "2U − 1", "U²"], answer: 1, why: "Nhân đôi độ rộng và dời điểm đầu về −1."}]
  },
  {
    id: 15,
    title: "Bảng hệ số chuyển tiếp FIR",
    en: "Appendix · FIR Transition Coefficients",
    pages: "987–992",
    group: "Phụ lục",
    intro: "Khi thiết kế FIR pha tuyến tính bằng lấy mẫu tần số, sách cho phép chọn các giá trị ở vùng chuyển tiếp từ bảng. Giá trị này được tối ưu cho từng cấu hình lưới và độ dài lọc.",
    topics: [
      {
        title: "Chọn lưới tần số",
        body: "M là độ dài FIR. Tham số α chọn lưới nguyên hoặc dịch nửa bước. Sau khi áp dụng đối xứng phù hợp của bộ lọc, chỉ cần chỉ định phần độc lập của lưới.",
        formula: "ωₖ = 2π(k + α)/M,  α ∈ {0, 1/2}"
      },
      {
        title: "Ấn định thông, chắn và chuyển tiếp",
        body: "Cho đáp ứng biên độ thực Hr bằng 1 ở các điểm dải thông và 0 ở dải chắn của bộ lọc thông thấp. Các điểm chuyển tiếp nhận giá trị trung gian được tối ưu để giảm đỉnh gợn lớn nhất ở dải chắn.",
        formula: "Hr(ωₖ) = 1 (dải thông),  0 (dải chắn),  Tᵢ (điểm chuyển tiếp)",
        note: "Điểm chuyển tiếp ảnh hưởng tới đáp ứng giữa các điểm lưới. Phải kiểm lại trên một lưới dày hơn."
      },
      {
        title: "Đọc đúng bảng trong giáo trình",
        body: "Chọn bảng theo α và số điểm chuyển tiếp. Tiếp đó tìm nhóm M chẵn hay lẻ, hàng độ dài M và bề rộng phù hợp. Dùng các giá trị Tᵢ của hàng đó, rồi xây dựng lại đáp ứng FIR như trong chương Thiết kế bộ lọc số."
      }
    ],
    example: {title: "Xác định lưới trước khi tra hệ số", steps: [
      "Chọn M = 16 và α = 1/2. Điểm đầu là ω₀ = π/16, điểm kế là ω₁ = 3π/16.",
      "Nếu có một điểm chuyển tiếp, tra bảng α = 1/2, một hệ số, nhóm M chẵn và hàng M = 16.",
      "Sau khi điền hệ số, kiểm đáp ứng giữa các điểm lấy mẫu để đánh giá gợn dải chắn."
    ]},
    pitfalls: ["Không bê hệ số từ lưới α = 0 sang lưới α = 1/2.", "Một điểm có giá trị 0 trong lưới không bảo đảm cả đoạn quanh điểm đó bằng 0."],
    quiz: [{q: "Khi M = 16, α = 1/2, điểm đầu của lưới là bao nhiêu?", options: ["0", "π/16", "π/8"], answer: 1, why: "Thay k = 0 vào ωₖ = 2π(k + α)/M."}]
  }
];
