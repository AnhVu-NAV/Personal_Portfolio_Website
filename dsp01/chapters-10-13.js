window.DSP_CHAPTERS.push(
  {
    id: 10,
    title: "Thiết kế bộ lọc số",
    en: "Design of Digital Filters",
    pages: "669–766",
    group: "Bộ lọc và ứng dụng",
    intro: "Thiết kế bộ lọc bắt đầu từ việc quyết định tần số nào cần giữ và tần số nào cần giảm. Chương này đưa ra nhiều cách biến yêu cầu đó thành các hệ số FIR hoặc IIR, đồng thời cho thấy cái giá phải trả về độ trễ, sai số và độ phức tạp.",
    topics: [
      {
        title: "Chuyển yêu cầu thành đặc tả tần số",
        body: "Với bộ thông thấp, ωp là biên dải thông và ωs là biên dải chắn. Các mức δp và δs lần lượt giới hạn sai lệch biên độ quanh 1 trong dải thông và biên độ còn sót lại trong dải chắn. Dải chuyển tiếp càng hẹp hoặc yêu cầu suy hao càng sâu thì thường cần bộ lọc bậc cao hơn.",
        formula: "1 − δp ≤ |H(eʲω)| ≤ 1 + δp, 0 ≤ ω ≤ ωp\n|H(eʲω)| ≤ δs, ωs ≤ ω ≤ π\nAs = −20 log₁₀(δs) dB",
        note: "Đổi Hz sang radian/mẫu bằng ω = 2πF/Fs. Biên dải thông và dải chắn của bộ thông dải xuất hiện ở cả hai phía của dải cần giữ."
      },
      {
        title: "Bốn loại FIR pha tuyến tính",
        body: "Với FIR hệ số thực dài M, nếu đáp ứng xung đối xứng hoặc phản đối xứng quanh điểm giữa thì pha tuyến tính từng đoạn, với trễ nhóm (M − 1)/2 mẫu ở nơi đáp ứng khác 0. Bốn loại ứng với hai kiểu đối xứng và hai trường hợp độ dài chẵn hoặc lẻ. Loại I đối xứng và M lẻ. Loại II đối xứng và M chẵn, buộc H(π) = 0. Loại III phản đối xứng và M lẻ, buộc H(0) = H(π) = 0. Loại IV phản đối xứng và M chẵn, chỉ buộc H(0) = 0.",
        formula: "h[n] = ±h[M − 1 − n]\nτg = (M − 1)/2 mẫu",
        note: "Chọn loại FIR trước khi tối ưu. Ví dụ, loại II không thích hợp cho bộ thông cao cần đáp ứng khác 0 ở Nyquist."
      },
      {
        title: "Thiết kế FIR bằng cửa sổ",
        body: "Lấy biến đổi Fourier ngược của đáp ứng mong muốn, dịch tâm đáp ứng xung về (M − 1)/2 rồi nhân với cửa sổ hữu hạn. Với thông thấp lý tưởng, đáp ứng xung là sinc. Nhân cửa sổ trong miền thời gian làm phổ bị làm trơn, tạo dải chuyển tiếp và gợn. Cửa sổ chữ nhật có thùy chính hẹp nhưng thùy phụ lớn, còn Hamming thường giảm thùy phụ với dải chuyển tiếp rộng hơn. Kaiser có tham số β để điều chỉnh sự đánh đổi này.",
        formula: "α = (M − 1)/2, m = n − α\nhd[n] = sin(ωc m)/(πm), với hd[α] = ωc/π khi m = 0\nh[n] = hd[n]w[n], 0 ≤ n < M"
      },
      {
        title: "Thiết kế bằng lấy mẫu tần số",
        body: "Chọn các giá trị đáp ứng tại lưới DFT rồi lấy IDFT để tìm h[n]. Có thể điều chỉnh các mẫu trong dải chuyển tiếp nhằm hạ gợn giữa các điểm lưới. Để h[n] thực, phổ mẫu cần đối xứng liên hợp. Để có pha tuyến tính, cần chọn đồng thời biên độ có dấu và pha theo loại FIR.",
        formula: "ωk = 2πk/M, k = 0,…,M − 1\nh[n] = (1/M) Σₖ H[k] exp(j·2πkn/M)",
        note: "Điểm khớp trên lưới không bảo đảm đáp ứng giữa các điểm đạt đặc tả. Luôn kiểm lại trên lưới dày."
      },
      {
        title: "Xấp xỉ Chebyshev và thiết kế Remez",
        body: "Khi muốn sai số lớn nhất nhỏ nhất, ta tối ưu biên độ có dấu A(ω) bằng tiêu chuẩn minimax có trọng số. Thuật toán trao đổi Remez, dùng trong thiết kế Parks–McClellan, cập nhật tập tần số có sai số cực trị. Tại nghiệm điển hình, sai số có trọng số luân phiên dấu và gần cùng độ lớn trên các dải được ràng buộc. Bộ vi phân và biến đổi Hilbert dùng đáp ứng phản đối xứng, khác mục tiêu biên độ của bộ thông thấp.",
        formula: "E(ω) = W(ω)[Ad(ω) − A(ω)]\nMục tiêu: min max |E(ω)| trên các dải được thiết kế.",
        note: "Bộ vi phân lý tưởng có đáp ứng jω trong dải xét. Biến đổi Hilbert lý tưởng có đáp ứng −j ở tần số dương và +j ở tần số âm."
      },
      {
        title: "IIR từ bộ lọc tương tự",
        body: "Xấp xỉ đạo hàm bằng sai phân lùi tạo một phép thế đơn giản nhưng có thể làm lệch hình dạng đáp ứng tần số. Phương pháp bất biến xung giữ các giá trị của đáp ứng xung tương tự tại các thời điểm lấy mẫu, nên cực p trong mặt phẳng s ánh xạ thành e^(pT). Phổ tương tự bị lặp sau lấy mẫu, vì vậy bất biến xung phù hợp hơn khi năng lượng ngoài dải gốc đã đủ nhỏ.",
        formula: "Sai phân lùi: s ≈ (1 − z⁻¹)/T\nBất biến xung: h[n] = ha(nT), theo quy ước sách\nCực: z = exp(pT)"
      },
      {
        title: "Biến đổi song tuyến tính và hiệu chỉnh trước",
        body: "Biến đổi song tuyến tính đưa nửa trái mặt phẳng s vào trong vòng tròn đơn vị và ánh xạ trục jΩ lên vòng tròn đơn vị. Ánh xạ tần số một-một nên tránh chồng phổ như bất biến xung, nhưng làm cong thang tần số. Khi đặc tả cho biên số ωp, ωs, trước hết đổi từng biên sang Ω bằng công thức tang rồi mới thiết kế mẫu tương tự.",
        formula: "s = (2/T)(1 − z⁻¹)/(1 + z⁻¹)\nΩ = (2/T)tan(ω/2)\nω = 2 arctan(ΩT/2)"
      },
      {
        title: "Chọn mẫu Butterworth, Chebyshev hay elliptic",
        body: "Butterworth có biên độ đơn điệu và phẳng tối đa tại gốc. Chebyshev I cho phép gợn trong dải thông, Chebyshev II cho phép gợn trong dải chắn. Elliptic cho phép gợn ở cả hai dải và thường đạt cùng đặc tả với bậc thấp nhất trong nhóm mẫu này.",
        formula: "Butterworth bậc N: |Ha(jΩ)|² = 1/[1 + (Ω/Ωc)²ᴺ]",
        note: "IIR bậc thấp thường tiết kiệm phép tính, nhưng pha thường không tuyến tính. Khi triển khai bậc cao, ưu tiên ghép các khâu bậc hai để giảm độ nhạy số."
      },
      {
        title: "Đổi dạng bộ lọc từ mẫu thông thấp",
        body: "Với mẫu tương tự thông thấp chuẩn hóa có biên 1 rad/s, ta đổi dạng bằng cách thay biến trong hàm truyền mẫu. Nếu thiết kế thông dải với hai biên Ω₁ và Ω₂, đặt B = Ω₂ − Ω₁ và Ω₀ = √(Ω₁Ω₂). Thực hiện biến đổi này trong miền tương tự rồi số hóa, hoặc dùng phép đổi biến trực tiếp trong miền z với mẫu số.",
        formula: "Thế vào biến của mẫu tương tự:\nThông thấp: s/Ωc. Thông cao: Ωc/s.\nThông dải: (s² + Ω₀²)/(Bs). Chắn dải: Bs/(s² + Ω₀²).",
        note: "Khi dùng biến đổi song tuyến tính, Ω₁ và Ω₂ phải là các biên tương tự đã hiệu chỉnh từ biên số."
      }
    ],
    example: {
      title: "Kiểm tra bộ làm mượt FIR ba hệ số",
      steps: [
        "Chọn h[0] = 1/4, h[1] = 1/2, h[2] = 1/4. Các hệ số có tổng bằng 1, nên tín hiệu hằng được giữ nguyên ở trạng thái xác lập.",
        "Thay vào H(eʲω) = 1/4 + (1/2)e⁻ʲω + (1/4)e⁻ʲ²ω. Nhóm các số hạng quanh e⁻ʲω được H(eʲω) = e⁻ʲω(1 + cos ω)/2.",
        "Ở DC, biên độ bằng 1. Ở ω = π/2, biên độ bằng 1/2, khoảng −6,02 dB. Ở Nyquist, đáp ứng bằng 0.",
        "Các hệ số đối xứng nên bộ lọc có pha tuyến tính và trễ nhóm 1 mẫu. Nếu đặc tả đòi dải chuyển tiếp rất hẹp, ba hệ số này thường chưa đủ."
      ]
    },
    pitfalls: [
      "Nhầm độ dài M với bậc M − 1 của FIR.",
      "Đọc độ suy hao biên độ với 10 log₁₀ thay vì 20 log₁₀. Hệ số 10 dùng khi lấy log của tỉ số công suất.",
      "Bỏ qua hiệu chỉnh trước tần số trong biến đổi song tuyến tính, khiến các biên số lệch khỏi đặc tả."
    ],
    quiz: [
      {
        q: "FIR đối xứng dài 8 hệ số có tính chất nào?",
        options: ["Trễ nhóm 4 mẫu và H(0) = 0", "Trễ nhóm 3,5 mẫu và H(π) = 0", "Trễ nhóm 7 mẫu và H(π) = 1"],
        answer: 1,
        why: "Đây là FIR loại II. Trễ nhóm là (8 − 1)/2 = 3,5 mẫu, và các cặp hệ số triệt tiêu nhau tại ω = π."
      },
      {
        q: "Trong biến đổi song tuyến tính, cần làm gì để biên số ωp đúng đặc tả?",
        options: ["Đặt Ωp = (2/T)tan(ωp/2) trước khi thiết kế mẫu tương tự", "Đặt Ωp = ωp cho mọi tốc độ lấy mẫu", "Tăng bậc cho đến khi mất hiệu ứng cong tần số"],
        answer: 0,
        why: "Hiệu chỉnh trước bằng ánh xạ ngược của biến đổi song tuyến tính đưa đúng biên tương tự về biên số yêu cầu."
      }
    ]
  },
  {
    id: 11,
    title: "Xử lý tín hiệu đa tốc độ",
    en: "Multirate Digital Signal Processing",
    pages: "767–840",
    group: "Bộ lọc và ứng dụng",
    intro: "Cùng một tín hiệu có thể được biểu diễn ở các tốc độ lấy mẫu khác nhau. Muốn đổi tốc độ đúng, cần hiểu thao tác thêm hoặc bỏ mẫu làm biến đổi phổ ra sao, rồi dùng bộ lọc và cấu trúc polyphase để giữ đúng dải mong muốn với ít phép tính.",
    topics: [
      {
        title: "Hạ mẫu và các bản sao phổ chồng lên nhau",
        body: "Hạ mẫu theo D chỉ giữ các mẫu có chỉ số chia hết cho D, làm tốc độ giảm D lần. Trong miền tần số, D bản phổ giãn ra rồi cộng lại. Nếu đầu vào thông thấp còn năng lượng trên π/D radian/mẫu ở tốc độ cũ, các bản sao có thể chồng vào nhau. Bộ lọc chống chồng phổ phải chạy trước khối hạ mẫu.",
        formula: "y[m] = v[mD], Fy = Fx/D\nY(eʲω) = (1/D) Σ[k = 0…D−1] V(exp(j(ω + 2πk)/D))"
      },
      {
        title: "Tăng mẫu, chèn 0 và nội suy",
        body: "Tăng mẫu theo I giữ các mẫu gốc ở vị trí bội của I, rồi chèn I − 1 số 0 giữa hai mẫu. Phổ bị nén theo trục tần số chuẩn hóa và xuất hiện các ảnh phổ. Để tạo mẫu trung gian, lọc thông thấp sau chèn 0. Bộ lọc lý tưởng có hệ số khuếch đại I trong dải thông để giữ đúng biên độ.",
        formula: "u[n] = x[n/I] nếu n chia hết cho I, và bằng 0 nếu không\nU(eʲω) = X(eʲᴵω), Fu = IFx\nBộ nội suy thông thấp lý tưởng: ωc = π/I, gain = I"
      },
      {
        title: "Đổi tốc độ theo tỉ số hữu tỉ I/D",
        body: "Rút gọn tỉ số đích, tăng mẫu theo I, lọc, rồi hạ mẫu theo D. Bộ lọc chạy ở tốc độ trung gian IFx và làm hai việc: xóa ảnh phổ do chèn 0 và chặn các thành phần gây chồng phổ khi hạ mẫu. Với tín hiệu thông thấp, dải giữ lại tính theo Hz bị giới hạn bởi cả Nyquist cũ và mới.",
        formula: "x → ↑I → H → ↓D → y\nFy = (I/D)Fx\nωc lý tưởng = min(π/I, π/D), tại tốc độ IFx\ny[m] = Σₖ h[mD − kI]x[k]"
      },
      {
        title: "Đổi tốc độ tùy ý và pha nội suy",
        body: "Nếu tốc độ mới không khóa theo tỉ số hữu tỉ đơn giản, hãy biểu diễn thời điểm mẫu mới trên lưới đầu vào. Tách vị trí đó thành chỉ số nguyên và phần lẻ. Ngân hàng pha nội suy chọn bộ hệ số ứng với vị trí giữa hai mẫu. Cấu trúc Farrow biểu diễn các hệ số nội suy bằng đa thức của phần lẻ, nhờ đó giữ các FIR con cố định và chỉ cập nhật tham số trễ.",
        formula: "mTy/Tx = km + μm\nkm = floor(mTy/Tx), 0 ≤ μm < 1\nFarrow: H(z; μ) = Σᵣ μʳ Cᵣ(z)"
      },
      {
        title: "Tách polyphase và các đồng nhất thức đổi chỗ",
        body: "Tách đáp ứng xung thành các dãy con theo phần dư của chỉ số. Khi hạ mẫu, cách này bỏ được các đầu ra sắp bị vứt đi. Khi tăng mẫu, nó tránh nhân với các số 0 vừa chèn. Hai đồng nhất thức noble cho phép đổi vị trí của một dạng bộ lọc thích hợp với khối đổi tốc độ.",
        formula: "eᵣ[m] = h[mM + r], r = 0,…,M − 1\nH(z) = Σᵣ z⁻ʳ Eᵣ(zᴹ)\nH(zᴹ) → ↓M ≡ ↓M → H(z)\nH(z) → ↑M ≡ ↑M → H(zᴹ)",
        note: "Điều kiện dạng zᴹ rất quan trọng. Không thể tự do đổi chỗ một bộ lọc bất kỳ với khối ↑ hoặc ↓."
      },
      {
        title: "Nhiều tầng và bộ lọc half-band",
        body: "Phân tích hệ số đổi tốc độ thành tích để thiết kế nhiều tầng. Với hạ mẫu, đưa một phần giảm tốc lên trước có thể giúp các tầng sau chạy chậm hơn. Cần kiểm tra dải chống chồng phổ của từng tầng. Half-band hữu ích khi đổi tốc độ theo 2, vì một trong hai nhóm hệ số xen kẽ bằng 0 ngoài hệ số tâm.",
        formula: "D = D₁D₂⋯Dₖ hoặc I = I₁I₂⋯Iₖ\nHalf-band đối xứng: ωp + ωs = π; hệ số tâm = 1/2 khi chuẩn hóa mức thông là 1.",
        note: "So sánh tổng phép nhân mỗi giây trên toàn chuỗi. Chọn thứ tự tầng chỉ theo số hệ số có thể cho kết quả ngược."
      },
      {
        title: "CIC cho đổi tốc độ hệ số lớn",
        body: "CIC ghép K tầng tích lũy và K tầng sai phân, cho phép đổi tốc độ theo số nguyên R bằng phép cộng, trừ và trễ. Với hạ mẫu, đặt các tầng tích lũy trước khối ↓R và các tầng sai phân sau nó để giảm chi phí. Đáp ứng tương đương trong lưới tốc độ cao là tích chập nhiều cửa sổ chữ nhật.",
        formula: "H(z) = [(1 − z^(−RD))/(1 − z⁻¹)]ᴷ\nD là độ trễ của khâu sai phân ở tốc độ thấp. Gain DC = (RD)ᴷ.",
        note: "Tính độ rộng thanh ghi từ độ lợi và kiểm tra độ sụt trong dải thông. Có thể cần FIR bù ở tốc độ thấp."
      },
      {
        title: "Đổi tốc độ cho tín hiệu thông dải",
        body: "Một dải phổ nằm xa DC vẫn có thể được hạ mẫu nếu các bản sao gập của dải dương và dải âm không chồng nhau. Tùy tốc độ đã chọn, dải có thể dịch vị trí và đảo thứ tự tần số. Các trường hợp khác dùng trộn tần để đưa dải cần xử lý về gốc trước khi hạ mẫu.",
        formula: "Trộn phức: v[n] = x[n]e⁻ʲω₀ⁿ ⇒ V(eʲω) = X(eʲ⁽ω⁺ω₀⁾)",
        note: "Băng thông hẹp tự nó chưa đủ. Kiểm tra vị trí từng bản sao sau phép gập với tốc độ mới."
      },
      {
        title: "Ngân hàng lọc, QMF và tái tạo hoàn hảo",
        body: "Ngân hàng phân tích chia tín hiệu thành các dải con rồi hạ mẫu từng nhánh. Ngân hàng tổng hợp tăng mẫu, lọc và cộng lại. Các nhánh phải phối hợp để những bản sao ngoài ý muốn triệt nhau, còn nhánh mong muốn chỉ mang hệ số tỉ lệ và độ trễ. Ngân hàng DFT dùng các bộ lọc là bản dịch phổ của một mẫu chung, thuận lợi cho triển khai bằng polyphase và FFT.",
        formula: "X̂(z) = R₀(z)X(z) + Σ[m = 1…M−1] Rₘ(z)X(z·W_M^m)\nTái tạo hoàn hảo: Rₘ(z) = 0 với m ≠ 0, R₀(z) = cz⁻ᵈ",
        note: "Ở đây W_M = exp(−j2π/M). Triệt alias chưa đủ nếu R₀(z) vẫn làm méo biên độ hoặc pha."
      }
    ],
    example: {
      title: "Đổi âm thanh từ 48 kHz xuống 32 kHz",
      steps: [
        "Tỉ số 32/48 rút gọn thành 2/3. Chọn I = 2 và D = 3.",
        "Sau ↑2, tốc độ trung gian là 96 kHz. Sau ↓3, tốc độ đầu ra là 32 kHz và Nyquist mới là 16 kHz.",
        "Bộ lọc ở giữa phải bảo vệ Nyquist mới và xóa ảnh phổ do chèn 0. Biên lý tưởng ở 16 kHz tương ứng ωc = 2π·16/96 = π/3, với gain dải thông bằng 2.",
        "Khi thiết kế bộ lọc hữu hạn, đặt dải thông thấp hơn 16 kHz để dành chỗ cho dải chuyển tiếp. Tách polyphase để tránh tính các đầu ra sẽ bị bỏ."
      ]
    },
    pitfalls: [
      "Lọc chống chồng phổ sau ↓D, lúc các thành phần đã chồng vào nhau.",
      "Tưởng chèn số 0 chính là nội suy xong. Các số 0 chỉ là đầu vào của bộ lọc nội suy.",
      "Dùng biên ω đã chuẩn hóa tại tốc độ cũ cho bộ lọc chạy ở tốc độ trung gian."
    ],
    quiz: [
      {
        q: "Hạ mẫu theo D = 3 một tín hiệu thông thấp. Dải giữ lại ở tốc độ đầu vào có biên lý tưởng nào?",
        options: ["π", "2π/3", "π/3"],
        answer: 2,
        why: "Nyquist ở tốc độ mới bằng một phần ba Nyquist cũ. Bộ lọc chống chồng phổ cần giới hạn phổ tại biên π/3 hoặc thấp hơn."
      },
      {
        q: "Một ngân hàng lọc đã triệt mọi ảnh alias. Điều gì còn cần để tái tạo hoàn hảo?",
        options: ["Nhánh mong muốn tương đương một hệ số tỉ lệ và một độ trễ", "Tất cả các nhánh có cùng số hệ số", "Tăng hệ số hạ mẫu lên gấp đôi"],
        answer: 0,
        why: "Nếu R₀(z) làm méo phổ thì đầu ra vẫn khác tín hiệu ban đầu dù không còn thành phần alias."
      }
    ]
  },
  {
    id: 12,
    title: "Dự đoán tuyến tính và bộ lọc tối ưu",
    en: "Linear Prediction and Optimum Linear Filters",
    pages: "841–898",
    group: "Bộ lọc và ứng dụng",
    intro: "Khi tín hiệu hoặc nhiễu mang tính ngẫu nhiên, các mẫu vẫn có thể liên hệ với nhau qua tương quan. Chương này dùng tương quan để xây dựng bộ dự đoán tuyến tính và bộ lọc Wiener, sao cho công suất sai số bình phương trung bình nhỏ nhất trong lớp bộ lọc đã chọn.",
    topics: [
      {
        title: "Dừng nghĩa rộng, tương quan và mật độ phổ công suất",
        body: "Quá trình dừng nghĩa rộng có trung bình không đổi và tự tương quan chỉ phụ thuộc độ trễ. PSD cho biết công suất trung bình phân bố theo tần số như thế nào và là DTFT của tự tương quan. Nhiễu trắng trung bình 0 có các mẫu khác thời điểm không tương quan, nên PSD phẳng.",
        formula: "rxx[k] = E{x[n]x*[n − k]}\nSxx(eʲω) = Σₖ rxx[k]e⁻ʲωk\nNhiễu trắng: rxx[k] = σ²δ[k], Sxx(eʲω) = σ²",
        note: "Dừng nghĩa rộng không đòi mọi phân phối xác suất bất biến theo thời gian. Muốn thay kỳ vọng bằng trung bình từ một bản ghi dài còn cần điều kiện ergodic thích hợp."
      },
      {
        title: "Biểu diễn đổi mới và mô hình AR, MA, ARMA",
        body: "Có thể mô hình hóa nhiều quá trình dừng như đầu ra của một bộ lọc nhân quả kích bởi chuỗi đổi mới trắng. Mô hình AR dùng phản hồi từ các mẫu đầu ra trước đó, MA chỉ lọc FIR chuỗi đổi mới, còn ARMA kết hợp hai phần. Nếu H có nghịch đảo nhân quả ổn định, H⁻¹ có thể dùng để làm trắng.",
        formula: "x[n] + Σₖ aₖ x[n − k] = e[n] + Σₖ bₖ e[n − k]\nH(z) = B(z)/A(z)\nSxx(eʲω) = σe² |B(eʲω)/A(eʲω)|²"
      },
      {
        title: "Dự đoán tiến, dự đoán lùi và nguyên lý trực giao",
        body: "Dự đoán tiến bậc p ước lượng mẫu hiện tại từ p mẫu quá khứ. Dự đoán lùi ước lượng mẫu cũ nhất trong một cửa sổ từ các mẫu mới hơn. Ở nghiệm tối ưu, sai số trực giao với mọi mẫu đã dùng để ước lượng. Điều này biến bài toán cực tiểu hóa thành một hệ tuyến tính.",
        formula: "x̂[n] = Σₖ₌₁ᵖ cₖ x[n − k], e[n] = x[n] − x̂[n]\nE{e[n]x*[n − ℓ]} = 0, ℓ = 1,…,p",
        note: "Nếu giáo trình viết e[n] = x[n] + Σₖ aₖ x[n − k], hệ số aₖ có dấu ngược với cₖ."
      },
      {
        title: "Phương trình Yule–Walker",
        body: "Thay biểu thức sai số vào điều kiện trực giao. Với tín hiệu thực dừng, hàng ℓ, cột k của ma trận tương quan chứa rxx[ℓ − k], nên từng đường chéo mang cùng giá trị. Nếu tín hiệu thật sự là AR(p) do đổi mới trắng kích, nghiệm dự đoán p bước trễ cho lại tham số mô hình theo quy ước dấu đã chọn.",
        formula: "R c = r, với Rℓₖ = rxx[ℓ − k], rℓ = rxx[ℓ]\nPp = rxx[0] − rᵀc  (tín hiệu thực)"
      },
      {
        title: "Levinson–Durbin, hệ số phản xạ và cấu trúc lưới",
        body: "Levinson–Durbin tận dụng ma trận Toeplitz để đi từ nghiệm bậc m − 1 đến bậc m, chi phí thường là O(p²). Mỗi tầng thêm một hệ số phản xạ Kₘ và cập nhật sai số dự đoán tiến, lùi. Thuật toán Schur cũng tính các hệ số phản xạ theo từng bậc và phù hợp với bố trí song song. Với ma trận tương quan xác định dương, |Kₘ| < 1 và bộ lọc sai số dự đoán tiến là pha tối thiểu.",
        formula: "Pₘ = (1 − |Kₘ|²)Pₘ₋₁, P₀ = rxx[0]\nfₘ[n] = fₘ₋₁[n] + Kₘgₘ₋₁[n − 1]\ngₘ[n] = gₘ₋₁[n − 1] + Kₘ*fₘ₋₁[n]"
      },
      {
        title: "Cấu trúc lưới AR và lưới–thang ARMA",
        body: "Đảo vai trò đầu vào và sai số dự đoán trong cấu trúc lưới cho bộ tạo tín hiệu toàn cực. Phần lưới mô tả mẫu số thông qua các hệ số phản xạ. Với mô hình ARMA, phần thang cộng các tín hiệu tại nhiều tầng để biểu diễn thêm tử số. Các tham số từng tầng hữu ích khi cần tăng bậc mô hình dần.",
        formula: "Lưới AR: H(z) = 1/A(z)\nLưới–thang ARMA: H(z) = B(z)/A(z)"
      },
      {
        title: "Ước lượng phổ và làm trắng bằng dự đoán",
        body: "Với mô hình AR, lấy các hệ số dự đoán để dựng mẫu số A(z). Nếu mô hình mô tả dữ liệu tốt, chuỗi sai số gần trắng và cho biết phần thông tin chưa dự đoán được. Phổ ước lượng có các đỉnh gần góc cực của 1/A(z), hữu ích cho nhận dạng tần số cộng hưởng.",
        formula: "A(z) = 1 − Σₖ₌₁ᵖ cₖ z⁻ᵏ\nŜxx(eʲω) = Pp/|A(eʲω)|²",
        note: "Bậc AR cao có thể tạo đỉnh giả khi dữ liệu ngắn. Kiểm tra cả phổ và phần dư thay vì chỉ nhìn sai số huấn luyện."
      },
      {
        title: "Bộ lọc Wiener FIR",
        body: "Cho vector u chứa các mẫu đầu vào khả dụng và tín hiệu đích d. Wiener tìm hệ số h để y = hᴴu gần d theo MSE. Tín hiệu đích quyết định bài toán là lọc hiện tại, dự đoán tương lai hay làm trơn quá khứ. Nghiệm duy nhất khi ma trận tương quan khả nghịch.",
        formula: "e = d − hᴴu, R = E{uuᴴ}, p = E{ud*}\nR hopt = p\nJmin = E{|d|²} − pᴴR⁻¹p",
        note: "Khi giải số, dùng phép giải hệ phương trình hoặc phân rã thích hợp thay cho việc tạo R⁻¹ một cách tường minh."
      },
      {
        title: "Wiener nhân quả và phi nhân quả",
        body: "Với Wiener phi nhân quả, có thể dùng cả mẫu trước và sau thời điểm ước lượng. Đáp ứng tối ưu là tỉ số phổ chéo đích–đầu vào trên PSD đầu vào tại những nơi mẫu số dương. Nếu x = s + v, s và v không tương quan, đáp ứng giữ mạnh hơn ở dải có công suất tín hiệu lớn so với nhiễu. Khi cần nhân quả, phải áp thêm ràng buộc và dùng phân tích nhân tử phổ để tìm nghiệm.",
        formula: "Hopt(eʲω) = Sdx(eʲω)/Sxx(eʲω)  (phi nhân quả)\nd = s, x = s + v ⇒ Hopt = Sss/(Sss + Svv)",
        note: "Cắt bỏ trực tiếp các hệ số ở n < 0 của nghiệm phi nhân quả nói chung không cho bộ lọc Wiener nhân quả tối ưu."
      }
    ],
    example: {
      title: "Dự đoán một quá trình AR(1)",
      steps: [
        "Cho x[n] = 0,75x[n − 1] + v[n], với v là chuỗi đổi mới trắng phương sai 1 và không tương quan với quá khứ của x.",
        "Lấy phương sai hai vế ở trạng thái dừng: r[0] = 0,75²r[0] + 1. Suy ra r[0] = 16/7.",
        "Tương quan với x[n − 1] cho r[1] = 0,75r[0] = 12/7. Phương trình bậc một c₁r[0] = r[1] cho c₁ = 0,75.",
        "Dự đoán là x̂[n] = 0,75x[n − 1], phần dư chính là v[n]. MSE tối ưu bằng 1, còn PSD của x là 1/|1 − 0,75e⁻ʲω|²."
      ]
    },
    pitfalls: [
      "Nhầm tương quan với hiệp phương sai. Khi trung bình khác 0, cần xem mô hình có giả sử dữ liệu đã trừ trung bình hay chưa.",
      "Lẫn dấu giữa đa thức A(z) và các hệ số trực tiếp của giá trị dự đoán.",
      "Dùng bộ làm trơn phi nhân quả cho hệ thống thời gian thực mà không tính các mẫu tương lai hoặc độ trễ."
    ],
    quiz: [
      {
        q: "Điều kiện trực giao của nghiệm dự đoán tuyến tính tối ưu nói gì?",
        options: ["Sai số bằng 0 ở mọi mẫu", "Sai số không tương quan với từng mẫu đã dùng để dự đoán", "Mọi mẫu đầu vào đều phải độc lập"],
        answer: 1,
        why: "MSE được cực tiểu khi thành phần sai số không còn hình chiếu lên không gian sinh bởi các mẫu khả dụng."
      },
      {
        q: "Với Wiener phi nhân quả và x = s + v không tương quan, tại dải có Svv lớn hơn Sss rất nhiều thì |Hopt| thế nào?",
        options: ["Gần 1", "Gần 0", "Luôn bằng 1/2"],
        answer: 1,
        why: "Tỉ số Sss/(Sss + Svv) gần 0 khi nhiễu chiếm ưu thế, nên dải đó bị suy giảm mạnh."
      }
    ]
  },
  {
    id: 13,
    title: "Bộ lọc thích nghi",
    en: "Adaptive Filters",
    pages: "899–980",
    group: "Bộ lọc và ứng dụng",
    intro: "Khi hệ thống chưa biết hoặc thay đổi theo thời gian, bộ lọc thích nghi cập nhật hệ số trong lúc nhận dữ liệu. LMS dùng ước lượng gradient đơn giản, còn RLS giải bài toán bình phương tối thiểu có trọng số theo thời gian.",
    topics: [
      {
        title: "Vòng thích nghi và tín hiệu mong muốn",
        body: "FIR thích nghi nhận vector mẫu u[n], tạo đầu ra y[n], rồi so sánh với đích d[n] để lấy sai số. Sai số dẫn đường cập nhật hệ số. Cách chọn d và cách dùng y hay e ở đầu ra thay đổi theo ứng dụng.",
        formula: "y[n] = wᴴ[n]u[n]\ne[n] = d[n] − y[n]\nMục tiêu Wiener ở trạng thái dừng: min E{|e[n]|²}"
      },
      {
        title: "Nhận dạng hệ, khử nhiễu, khử vọng và cân bằng kênh",
        body: "Trong nhận dạng hệ, cùng đầu vào đi qua hệ chưa biết và bộ lọc thích nghi, rồi so sánh hai đầu ra. Trong khử nhiễu, nhánh tham chiếu cần tương quan với nhiễu ở nhánh chính và ít chứa tín hiệu cần giữ. Khử vọng dùng tín hiệu phát làm tham chiếu. Cân bằng kênh thường dùng chuỗi huấn luyện trước khi chuyển sang chế độ dùng quyết định của bộ thu.",
        formula: "Khử nhiễu: d[n] = s[n] + v[n], e[n] = d[n] − v̂[n]",
        note: "Khi khử nhiễu, tín hiệu cần lấy là e[n]. Trong nhận dạng hệ, y[n] là mô hình đầu ra của hệ chưa biết."
      },
      {
        title: "Tách thành phần hẹp dải và mã hóa dự đoán",
        body: "Bộ tăng cường thành phần hẹp dải dùng một bản trễ của chính tín hiệu làm tham chiếu. Chọn trễ đủ để nhiễu rộng dải mất phần lớn tương quan, trong khi thành phần hẹp dải còn dự đoán được. Đầu ra bộ lọc ước lượng phần hẹp dải, còn sai số giữ phần khó dự đoán. Trong mã hóa tiếng nói, dùng dự đoán để biểu diễn phần dư và tham số của mô hình thay cho từng mẫu thô.",
        formula: "Tham chiếu: u[n] = [x[n − D], …, x[n − D − M + 1]]ᵀ"
      },
      {
        title: "Từ hạ gradient đến LMS",
        body: "Hạ gradient theo MSE cập nhật theo hướng p − Rw, cần biết tương quan thống kê. LMS thay hướng đó bằng tích từ một mẫu dữ liệu. Vì vậy mỗi lần cập nhật chỉ cần số phép tính tỉ lệ với chiều dài M của FIR.",
        formula: "Hạ gradient: w[n + 1] = w[n] + μ(p − Rw[n])\nLMS: w[n + 1] = w[n] + μu[n]e*[n]",
        note: "Dấu liên hợp tương ứng quy ước y = wᴴu. Với dữ liệu thực, có thể bỏ liên hợp."
      },
      {
        title: "Bước học, hội tụ và sai số dư của LMS",
        body: "Bước μ lớn thường rút ngắn giai đoạn thích nghi ban đầu nhưng tăng dao động quanh nghiệm và có thể làm thuật toán phân kỳ. Trong phân tích hội tụ trung bình với giả thiết độc lập thường dùng, từng mode có hệ số 1 − μλᵢ, với λᵢ là trị riêng của R. Các mode rất nhỏ so với λ lớn nhất thường hội tụ chậm. Điều kiện hội tụ bình phương trung bình có thể chặt hơn.",
        formula: "Điều kiện hội tụ trung bình theo quy ước trên: 0 < μ < 2/λmax(R)",
        note: "Sai số đo được khi đang thích nghi gồm sai số tối thiểu vốn có và phần dư do hệ số dao động. Giảm μ có thể giảm phần dư nhưng làm chậm khả năng bám thay đổi."
      },
      {
        title: "LMS chuẩn hóa",
        body: "NLMS chia bước hiệu dụng cho năng lượng tức thời của vector đầu vào. Khi mức tín hiệu thay đổi, phép chuẩn hóa giúp tránh cập nhật quá lớn ở đoạn năng lượng cao. Thêm ε dương để tránh chia cho 0 ở đoạn im lặng.",
        formula: "w[n + 1] = w[n] + μ u[n]e*[n]/(ε + ‖u[n]‖²), ε > 0"
      },
      {
        title: "RLS và hệ số quên",
        body: "RLS tối ưu tổng bình phương lỗi có trọng số, trong đó các mẫu cũ được nhân với lũy thừa của λ. Với λ gần 1, thuật toán nhớ lâu. Giảm λ giúp bám thay đổi nhanh hơn nhưng ước lượng có thể biến động hơn. Cập nhật dùng vector gain k và ma trận nghịch đảo tương quan P, thay vì giải lại toàn bộ bài toán sau mỗi mẫu.",
        formula: "Jₙ(w) = Σᵢ₌₀ⁿ λⁿ⁻ⁱ |d[i] − wᴴu[i]|², 0 < λ ≤ 1\nk = Pu/(λ + uᴴPu)\nw ← w + ke*, với e tính bằng w cũ\nP ← (P − kuᴴP)/λ, với P ở vế phải là P cũ",
        note: "Một cách khởi tạo thường dùng là P[0] = I/δ với δ dương. RLS trực tiếp thường tốn O(M²) mỗi mẫu."
      },
      {
        title: "RLS dạng căn bậc hai, dạng lưới và thuật toán nhanh",
        body: "Dạng căn bậc hai cập nhật các nhân tử ma trận để cải thiện tính ổn định số. Dạng lưới cập nhật sai số dự đoán theo từng bậc, có thể ghép với phần ladder để tạo bộ lọc thích nghi. Thuật toán RLS nhanh khai thác việc vector đầu vào chỉ dịch một mẫu qua mỗi bước, nhưng cần chú ý độ nhạy với làm tròn số.",
        formula: "Chi phí điển hình mỗi mẫu: LMS O(M), RLS trực tiếp O(M²).",
        note: "Tốc độ hội tụ, bộ nhớ, độ ổn định số và khả năng theo dõi hệ thay đổi đều quan trọng khi chọn thuật toán."
      },
      {
        title: "Lọc thích nghi nhiều kênh và tạo chùm",
        body: "Với nhiều cảm biến, có thể gom các mẫu trễ của mọi kênh vào vector u. Bộ lọc học cách phối hợp tín hiệu theo mục tiêu, chẳng hạn giảm nhiễu đến từ một hướng trong mảng micro. Khi có hướng cần giữ, bài toán có thể bổ sung ràng buộc lên đáp ứng của mảng.",
        formula: "y[n] = Σₖ Σₗ wₖ,ₗ* xₖ[n − ℓ]"
      }
    ],
    example: {
      title: "Theo dõi hai bước LMS bằng tay",
      steps: [
        "Cho đầu vào thực x[n] = 1 và đích d[n] = 2 ở mọi thời điểm. Dùng FIR một hệ số, bắt đầu w[0] = 0 và chọn μ = 0,25.",
        "Bước đầu y[0] = 0, e[0] = 2. Cập nhật w[1] = 0 + 0,25·1·2 = 0,5.",
        "Bước kế tiếp y[1] = 0,5, e[1] = 1,5. Cập nhật w[2] = 0,5 + 0,25·1·1,5 = 0,875.",
        "Mỗi bước làm khoảng cách đến 2 còn 75% giá trị cũ. Do đó w tiến dần đến 2 và sai số tiến về 0 trong ví dụ không có nhiễu này."
      ]
    },
    pitfalls: [
      "Dùng công thức cập nhật với dấu sai do đổi định nghĩa e từ d − y thành y − d.",
      "Xem điều kiện hội tụ trung bình của LMS là bảo đảm hội tụ bình phương trung bình trong mọi dữ liệu.",
      "Đặt hệ số quên RLS quá nhỏ khi tín hiệu nhiều nhiễu hoặc không kích thích đủ các mode của bộ lọc."
    ],
    quiz: [
      {
        q: "Trong bộ khử nhiễu thích nghi, nếu y[n] là ước lượng nhiễu thì tín hiệu cần giữ lấy ở đâu?",
        options: ["Ở e[n] = d[n] − y[n]", "Ở y[n]", "Ở vector hệ số w[n]"],
        answer: 0,
        why: "Nhánh chính d chứa tín hiệu và nhiễu. Lấy d trừ ước lượng nhiễu giúp giữ lại tín hiệu mong muốn."
      },
      {
        q: "Trong RLS, giảm λ từ 1 xuống một giá trị nhỏ hơn có tác dụng trực tiếp gì?",
        options: ["Tăng trọng số các mẫu cũ", "Làm mọi mẫu có trọng số bằng nhau", "Giảm trọng số các mẫu cũ nhanh hơn"],
        answer: 2,
        why: "Trọng số của mẫu cách hiện tại k bước là λᵏ. Với λ < 1, trọng số giảm theo tuổi mẫu."
      }
    ]
  }
);
