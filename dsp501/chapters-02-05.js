window.DSP_CHAPTERS.push(
  {
    id: 2,
    title: "Tín hiệu và hệ thống rời rạc",
    en: "Discrete-Time Signals and Systems",
    pages: "43–150",
    group: "Nền tảng",
    intro: "Chương này mô tả dãy mẫu và cách một hệ biến đổi dãy đó. Với hệ tuyến tính bất biến theo thời gian (LTI), chỉ cần biết đáp ứng với một xung là tính được đầu ra cho mọi đầu vào.",
    topics: [
      {
        title: "Dãy cơ bản và phép biến đổi chỉ số",
        body: "Xung đơn vị δ chỉ khác 0 tại gốc. Bước đơn vị u bằng 1 từ gốc trở đi. Dịch phải n₀ mẫu dùng x[n−n₀], lật thời gian dùng x[−n], còn x[Mn] chỉ giữ mẫu có chỉ số là bội của M.",
        formula: "δ[0] = 1;  δ[n] = 0 khi n ≠ 0\nu[n] = 1 khi n ≥ 0;  u[n] = 0 khi n < 0\nδ[n] = u[n] − u[n−1]"
      },
      {
        title: "Tuần hoàn, chẵn lẻ, năng lượng và công suất",
        body: "Chu kỳ là số nguyên dương N sao cho x[n+N] = x[n] với mọi n. Có thể tách một dãy thành phần chẵn và phần lẻ để khai thác đối xứng. Năng lượng cộng bình phương độ lớn trên toàn dãy, còn công suất lấy trung bình theo thời gian.",
        formula: "xₑ[n] = (x[n] + x[−n])/2;  xₒ[n] = (x[n] − x[−n])/2\nE = Σₙ |x[n]|²\nP = lim(M→∞) [1/(2M+1)] Σ(n=−M…M) |x[n]|²",
        note: "Với dãy tuần hoàn, tính P bằng trung bình trên một chu kỳ. Một dãy có năng lượng hữu hạn có công suất trung bình bằng 0."
      },
      {
        title: "Các phép thử tính chất hệ",
        body: "Tuyến tính nghĩa là hệ bảo toàn tổ hợp tuyến tính. Bất biến theo thời gian nghĩa là dịch đầu vào bao nhiêu thì đầu ra dịch bấy nhiêu. Hệ nhân quả chỉ dùng hiện tại và quá khứ, còn hệ không nhớ chỉ dùng đúng mẫu hiện tại.",
        formula: "T{a x₁ + b x₂} = aT{x₁} + bT{x₂}\nT{x[n−n₀]} = y[n−n₀] nếu T{x[n]} = y[n]",
        note: "Ví dụ y[n] = nx[n] tuyến tính và không nhớ, nhưng hệ số n khiến hệ biến thiên theo thời gian."
      },
      {
        title: "Từ xung đơn vị đến tích chập",
        body: "Viết đầu vào thành tổng các xung dịch và nhân trọng số. Hệ LTI biến mỗi xung thành một bản dịch của đáp ứng xung h. Cộng các đáp ứng đó cho đầu ra. Khi tính tay tại n cố định, lật h theo chỉ số k, dịch rồi cộng các tích ở vùng chồng.",
        formula: "x[n] = Σₖ x[k]δ[n−k]\nh[n] = T{δ[n]}\ny[n] = (x ∗ h)[n] = Σₖ x[k]h[n−k]",
        note: "Hai dãy hữu hạn liên tiếp có độ dài L và M cho tối đa L+M−1 mẫu đầu ra. Chỉ số bắt đầu của đầu ra bằng tổng hai chỉ số bắt đầu."
      },
      {
        title: "Ghép hệ LTI và đáp ứng bước",
        body: "Mắc nối tiếp hai hệ tương ứng với tích chập hai đáp ứng xung. Mắc song song rồi cộng đầu ra tương ứng với cộng đáp ứng xung. Đáp ứng bước là tổng tích lũy của h và lấy sai phân của nó sẽ thu lại h.",
        formula: "h_nối_tiếp = h₁ ∗ h₂;  h_song_song = h₁ + h₂\ns[n] = (h ∗ u)[n] = Σₖ≤ₙ h[k]\nh[n] = s[n] − s[n−1]"
      },
      {
        title: "Nhân quả, ổn định BIBO và FIR/IIR",
        body: "Hệ LTI nhân quả có h bằng 0 trước gốc. Hệ ổn định BIBO biến mọi đầu vào bị chặn thành đầu ra bị chặn, tương đương với tổng trị tuyệt đối của h hữu hạn. FIR có đáp ứng xung dài hữu hạn, còn IIR có đáp ứng xung kéo dài vô hạn.",
        formula: "Nhân quả ⇔ h[n] = 0 với n < 0\nỔn định BIBO ⇔ Σₙ |h[n]| < ∞",
        note: "FIR luôn ổn định BIBO nếu các hệ số hữu hạn. IIR vẫn có thể ổn định, chẳng hạn h[n] = (1/2)^n u[n]."
      },
      {
        title: "Phương trình sai phân và sơ đồ khối",
        body: "Phương trình sai phân hệ số hằng dùng các mẫu đầu vào, đầu ra và các bản trễ của chúng. Với hệ số a₀ được chuẩn hóa bằng 1, chuyển các hạng đầu ra quá khứ sang vế phải để tính y[n] theo từng bước. Bộ cộng, bộ nhân hệ số và phần tử trễ một mẫu là ba khối cơ bản.",
        formula: "y[n] + Σ(k=1…N) aₖ y[n−k] = Σ(k=0…M) bₖ x[n−k]",
        note: "N là bậc hồi tiếp và M là bậc nhánh vào. Phần tử trễ một mẫu có ký hiệu z⁻¹. Phương trình có hồi tiếp cần trạng thái ban đầu để tính đầu ra."
      },
      {
        title: "Đáp ứng không đầu vào và không trạng thái",
        body: "Đáp ứng không đầu vào là phần do trạng thái ban đầu khi đặt x bằng 0. Đáp ứng không trạng thái là phần do x khi trạng thái ban đầu bằng 0. Với phương trình tuyến tính, cộng hai phần để có đáp ứng tổng.",
        formula: "y[n] = y_không_đầu_vào[n] + y_không_trạng_thái[n]\nVới y[n] = ay[n−1] + x[n], h[n] = a^n u[n] khi hệ nghỉ ban đầu.",
        note: "Nghiệm thuần nhất bậc một có dạng Ca^n. Với nghiệm đặc trưng lặp bậc r, dạng nghiệm có thêm các nhân tử 1, n, …, n^(r−1)."
      },
      {
        title: "Hiện thực đệ quy và không đệ quy",
        body: "Cấu trúc trực tiếp của FIR cộng các mẫu đầu vào đã trễ. Cũng có thể tính cùng một bộ trung bình trượt bằng cách cộng mẫu mới, trừ mẫu rời cửa sổ và cập nhật tổng trước đó. Khi trạng thái khởi tạo phù hợp, hai cách cho cùng đáp ứng xung.",
        formula: "s[n] = s[n−1] + x[n] − x[n−L]\ny[n] = s[n]/L = (1/L)Σ(k=0…L−1) x[n−k]",
        note: "Đệ quy là đặc điểm của cấu trúc tính. FIR và IIR phân biệt theo độ dài của đáp ứng xung."
      },
      {
        title: "Tương quan và ước lượng độ trễ",
        body: "Tương quan chéo đo mức độ giống nhau khi dịch một dãy so với dãy kia. Tự tương quan so dãy với chính nó. Theo quy ước dưới đây, nếu y là bản trễ D mẫu của x thì đỉnh của rᵧₓ thường xuất hiện tại ℓ = D.",
        formula: "rᵧₓ[ℓ] = Σₙ y[n]x*[n−ℓ]\nrₓₓ[0] = Eₓ;  rₓₓ[−ℓ] = rₓₓ*[ℓ]",
        note: "Dấu * sau một biến là liên hợp phức. Với dãy tuần hoàn, thay tổng trên toàn thời gian bằng trung bình trên một chu kỳ. Với y = h ∗ x, ta có rᵧₓ = h ∗ rₓₓ theo cùng quy ước."
      }
    ],
    example: {
      title: "Tính đầu ra của bộ trung bình hai mẫu",
      steps: [
        "Cho y[n] = (x[n]+x[n−1])/2 và x[0]=2, x[1]=4, x[2]=2. Các mẫu khác bằng 0.",
        "Cho x = δ để tìm h[0]=h[1]=1/2. Dãy h bằng 0 ở các chỉ số khác.",
        "Tính lần lượt y[0]=1, y[1]=3, y[2]=3 và y[3]=1. y[3] vẫn khác 0 vì hệ còn dùng x[2].",
        "Hệ nhân quả vì h bằng 0 trước gốc và ổn định BIBO vì Σₙ |h[n]| = 1."
      ]
    },
    pitfalls: [
      "Trong x[n−n₀], n₀ dương làm tín hiệu dịch sang phải.",
      "Nhân từng cặp mẫu chỉ là phép nhân điểm. Tích chập cần cộng trên chỉ số k.",
      "Hãy ghi rõ gốc n=0 khi biểu diễn một dãy hữu hạn. Đổi gốc sẽ dịch đầu ra."
    ],
    quiz: [
      {
        q: "Hệ y[n] = x[n+1] có nhân quả không?",
        options: ["Có, vì hệ tuyến tính", "Không, vì dùng mẫu ở tương lai", "Có, vì không có hồi tiếp"],
        answer: 1,
        why: "Để tính y[n], hệ cần x[n+1], là mẫu đến sau thời điểm n."
      },
      {
        q: "Điều kiện nào kiểm tra ổn định BIBO của một hệ LTI?",
        options: ["Σₙ h[n] = 1", "h[n] có dạng đối xứng", "Σₙ |h[n]| hữu hạn"],
        answer: 2,
        why: "Tổng tuyệt đối của h là điều kiện cần và đủ, kể cả khi h kéo dài vô hạn."
      }
    ]
  },
  {
    id: 3,
    title: "Biến đổi z và phân tích hệ LTI",
    en: "The z-Transform and LTI Analysis",
    pages: "151–228",
    group: "Nền tảng",
    intro: "Biến đổi z đưa dãy mẫu sang mặt phẳng phức để biến tích chập thành phép nhân. Biểu thức đại số cùng miền hội tụ cho biết dãy có hướng thời gian nào, hệ có nhân quả và ổn định hay không.",
    topics: [
      {
        title: "Định nghĩa biến đổi z và miền hội tụ",
        body: "Viết mỗi mẫu x[n] làm hệ số của z^(−n). Miền hội tụ ROC gồm các giá trị z tại đó tổng hội tụ tuyệt đối. Khi viết z = re^(jω), biến đổi z là biến đổi Fourier của dãy đã nhân thêm r^(−n).",
        formula: "X(z) = Σₙ x[n]z^(−n)\nROC = {z : Σₙ |x[n]z^(−n)| < ∞}"
      },
      {
        title: "Cùng phân thức, khác dãy",
        body: "Dãy bên phải có ROC về phía ngoài, dãy bên trái có ROC về phía trong, và dãy hai phía thường cho một vành khăn. Với biến đổi hữu tỉ, ROC không chứa cực. Tại z=0 và ở vô cực, khả năng hội tụ còn phụ thuộc các lũy thừa xuất hiện.",
        formula: "a^n u[n] ↔ 1/(1−az⁻¹), |z| > |a|\n−a^n u[−n−1] ↔ 1/(1−az⁻¹), |z| < |a|  (a ≠ 0)",
        note: "ROC quyết định khai triển theo lũy thừa của z⁻¹ hay z. Cần ghi cả phân thức và ROC."
      },
      {
        title: "Các tính chất tính toán",
        body: "Phép dịch sinh ra lũy thừa z, còn tích chập trở thành phép nhân. Khi cộng hoặc nhân các biến đổi, giao các ROC là vùng hội tụ bảo đảm nếu giao đó tồn tại. Triệt tiêu đại số có thể làm ROC thực tế rộng hơn.",
        formula: "x[n−n₀] ↔ z^(−n₀)X(z)\na^n x[n] ↔ X(z/a), với a ≠ 0\nx[−n] ↔ X(1/z)\nnx[n] ↔ −z dX(z)/dz\nx ∗ h ↔ X(z)H(z)"
      },
      {
        title: "Cực, điểm không và phương trình hệ",
        body: "Điểm không làm tử số bằng 0, cực làm mẫu số bằng 0 sau khi bỏ nhân tử chung. Với hệ LTI ở trạng thái nghỉ ban đầu, biến đổi phương trình sai phân cho H(z) = B(z)/A(z). Từ H có thể suy ngược về h, cấu trúc và đáp ứng đầu ra.",
        formula: "H(z) = Z{h[n]} = [Σ(k=0…M) bₖ z^(−k)] / [1+Σ(k=1…N) aₖ z^(−k)]\nY(z) = H(z)X(z)",
        note: "Cực liên hợp re^(±jω₀) tạo thành phần dao động ở ω₀ với bao r^n trong đáp ứng phải. Cực lặp có thêm nhân tử đa thức theo n."
      },
      {
        title: "Biến đổi z ngược",
        body: "Với phân thức hữu tỉ, chia đa thức nếu cần, sau đó tách phân thức đơn và đối chiếu từng hạng theo ROC. Cũng có thể khai triển chuỗi lũy thừa để đọc hệ số của z^(−n). Tích phân đường kín là cách tổng quát để lấy đúng hệ số Laurent.",
        formula: "x[n] = (1/(2πj)) ∮ X(z)z^(n−1) dz",
        note: "Chọn đường kín đi ngược chiều kim đồng hồ, bao quanh gốc và nằm trong ROC."
      },
      {
        title: "Đọc nhân quả và ổn định trên mặt phẳng z",
        body: "Hệ nhân quả hữu tỉ có ROC hướng ra ngoài cực ngoài cùng và chứa điểm vô cực. Hệ ổn định BIBO có ROC chứa đường tròn đơn vị. Vì vậy hệ hữu tỉ vừa nhân quả vừa ổn định có tất cả cực của H bên trong đường tròn đơn vị.",
        formula: "Ổn định BIBO ⇔ |z| = 1 nằm trong ROC của H\nH(e^(jω)) = H(z)|z=e^(jω) khi đường tròn đơn vị nằm trong ROC.",
        note: "Biết cực mà chưa biết ROC thì chưa thể kết luận hướng thời gian hoặc ổn định của một hệ bất kỳ."
      },
      {
        title: "Đáp ứng quá độ, xác lập và cực chung",
        body: "Với hệ nhân quả ổn định và kích thích tuần hoàn bật từ n=0, các hạng do cực ổn định của hệ thường suy giảm, còn phần ứng với các tần số vào có thể tồn tại ở xác lập. Nếu các phân thức của X và H chia sẻ một cực, tích có thể làm tăng bậc cực.",
        formula: "Y(z) = X(z)H(z)\nCực p lặp bậc r → đáp ứng phải dạng đa thức bậc tối đa r−1 nhân p^n."
      },
      {
        title: "Triệt tiêu cực và điểm không, ổn định bậc hai",
        body: "Nhân tử chung có thể biến mất khỏi hàm truyền vào–ra sau khi rút gọn. Khi triển khai các khối có trạng thái, một cực không ổn định bị che trong hàm truyền vẫn có thể xuất hiện trong trạng thái nội bộ. Với đa thức bậc hai hệ số thực, các bất đẳng thức bên dưới kiểm tra cả hai cực nằm trong đường tròn đơn vị.",
        formula: "z² + a₁z + a₂:  |a₂| < 1,  1+a₁+a₂ > 0,  1−a₁+a₂ > 0",
        note: "Với cặp cực liên hợp re^(±jω₀), ta có a₁ = −2r cos(ω₀) và a₂ = r². Điều kiện ổn định của hệ nhân quả khi đó là r < 1."
      },
      {
        title: "Biến đổi z một phía và điều kiện đầu",
        body: "Tổng một phía bắt đầu ở n=0. Nhờ vậy các mẫu trước gốc xuất hiện thành hạng riêng khi dịch, cho phép giải phương trình sai phân có trạng thái ban đầu.",
        formula: "X₊(z) = Σₙ₌₀…∞ x[n]z^(−n)\nZ₊{x[n−1]} = z⁻¹X₊(z) + x[−1]\nZ₊{x[n+1]} = z(X₊(z) − x[0])"
      },
      {
        title: "Giá trị đầu và giá trị cuối",
        body: "Với dãy bên phải bắt đầu tại n=0, giá trị đầu là giới hạn X(z) khi z tiến tới vô cực. Giá trị cuối hữu hạn có thể tính từ (1−z⁻¹)X(z) tại z=1 nếu các cực còn lại của biểu thức đó nằm trong đường tròn đơn vị.",
        formula: "x[0] = lim(z→∞) X(z)\nlim(n→∞) x[n] = lim(z→1) (1−z⁻¹)X(z)",
        note: "Dãy dao động không hội tụ không có giá trị cuối. Kiểm tra điều kiện cực trước khi thay z=1."
      }
    ],
    example: {
      title: "Giải hệ bậc một có trạng thái ban đầu",
      steps: [
        "Cho y[n] = 0,5y[n−1] + x[n], với x[n] = δ[n] tại n ≥ 0 và y[−1] = 2.",
        "Dùng biến đổi một phía. Y₊ = 0,5(z⁻¹Y₊+2)+1, nên Y₊ = 2/(1−0,5z⁻¹).",
        "Đọc cặp biến đổi bên phải. y[n] = 2(0,5)^n cho n ≥ 0.",
        "Kiểm tra y[0]=2 và y[1]=1 bằng phương trình gốc. Nếu hệ nghỉ ban đầu, đáp ứng xung chỉ là h[n]=(0,5)^n u[n]."
      ]
    },
    pitfalls: [
      "Phân thức X(z) chưa đủ để xác định x[n]. Đọc thêm ROC hoặc giả thiết nhân quả.",
      "Khi dùng H(z)=Y(z)/X(z), đầu ra phải là đáp ứng không trạng thái.",
      "Đánh giá một phân thức tại z=e^(jω) chỉ cho DTFT của dãy đã cho khi đường tròn đơn vị thuộc ROC hội tụ tương ứng."
    ],
    quiz: [
      {
        q: "H(z) = 1/(1−0,6z⁻¹) có ROC |z| < 0,6. Hệ này có ổn định BIBO không?",
        options: ["Có, vì cực 0,6 nằm trong đường tròn đơn vị", "Có, vì tử số là 1", "Không, vì ROC không chứa đường tròn đơn vị"],
        answer: 2,
        why: "Cực trong đường tròn đơn vị chỉ đủ để kết luận ổn định khi hệ hữu tỉ được biết là nhân quả."
      },
      {
        q: "Với biến đổi z một phía, Z₊{x[n−1]} bằng gì?",
        options: ["z⁻¹X₊(z) + x[−1]", "z⁻¹X₊(z)", "zX₊(z) + x[0]"],
        answer: 0,
        why: "Mẫu x[−1] đi vào số hạng n=0 sau khi trì hoãn một mẫu."
      }
    ]
  },
  {
    id: 4,
    title: "Phân tích tần số của tín hiệu",
    en: "Frequency Analysis of Signals",
    pages: "229–306",
    group: "Nền tảng",
    intro: "Phân tích Fourier cho biết những tần số nào tạo nên tín hiệu và mỗi tần số đóng góp bao nhiêu. Chọn công cụ theo hai câu hỏi. Tín hiệu liên tục hay rời rạc theo thời gian, và nó có tuần hoàn không?",
    topics: [
      {
        title: "Chuỗi Fourier liên tục",
        body: "Tín hiệu có chu kỳ T₀ được phân tích thành các họa âm tại kF₀, với F₀ = 1/T₀. Hệ số cₖ là mức đóng góp phức của họa âm k. Hệ số c₀ là giá trị trung bình trong một chu kỳ.",
        formula: "xₚ(t) = Σₖ cₖ e^(j2πkF₀t)\ncₖ = (1/T₀) ∫_một_chu_kỳ xₚ(t)e^(−j2πkF₀t) dt",
        note: "Ở điểm nhảy thỏa điều kiện Dirichlet, chuỗi Fourier hội tụ tới trung bình của giới hạn hai phía."
      },
      {
        title: "Biến đổi Fourier liên tục",
        body: "Với tín hiệu không tuần hoàn, thay các vạch tần số rời rạc bằng phổ trên trục tần số liên tục F. X(F) vừa mô tả độ lớn vừa giữ pha để có thể khôi phục tín hiệu. Dãy xung chữ nhật tuần hoàn chuyển dần về phổ dạng sinc khi khoảng cách các xung tăng.",
        formula: "X(F) = ∫_ℝ x(t)e^(−j2πFt) dt\nx(t) = ∫_ℝ X(F)e^(j2πFt) dF\nXung chữ nhật tâm 0, độ rộng T, cao A → X(F) = AT sinc(FT).",
        note: "Ở đây sinc(u) = sin(πu)/(πu), với sinc(0)=1. Cặp công thức dùng F theo Hz."
      },
      {
        title: "Chuỗi Fourier rời rạc",
        body: "Dãy tuần hoàn N mẫu có N họa âm phân biệt. Cộng thêm N vào chỉ số k cho lại cùng hàm mũ trên lưới n nguyên. Phổ là các vạch cách nhau 2π/N radian mỗi mẫu.",
        formula: "xₚ[n] = Σ(k=0…N−1) c[k] e^(j2πkn/N)\nc[k] = (1/N) Σ(n=0…N−1) xₚ[n]e^(−j2πkn/N)\nc[k+N] = c[k]"
      },
      {
        title: "DTFT của dãy không tuần hoàn",
        body: "DTFT nhận một dãy theo n và cho phổ X(e^(jω)) với ω chạy trên một trục liên tục. Phổ lặp sau mỗi 2π. Tích phân ngược trên một chu kỳ tần số cho lại dãy.",
        formula: "X(e^(jω)) = Σₙ x[n]e^(−jωn)\nx[n] = (1/(2π)) ∫₋π…π X(e^(jω))e^(jωn) dω",
        note: "Tổng tuyệt đối của x hữu hạn là điều kiện đủ để DTFT tồn tại theo nghĩa thông thường. DFT ở chương 7 lấy một tập hữu hạn các điểm tần số."
      },
      {
        title: "Phổ của dãy hoặc tín hiệu tuần hoàn",
        body: "Nếu năng lượng trong một chu kỳ hữu hạn và dương, tín hiệu tuần hoàn có công suất trung bình hữu hạn nhưng tổng năng lượng vô hạn. Biểu diễn phổ của nó bằng các xung Dirac đặt tại các tần số họa âm, với trọng số lấy từ chuỗi Fourier.",
        formula: "Liên tục: X(F) = Σₖ cₖ δ(F−kF₀)\nRời rạc: X(e^(jω)) = 2π Σₖ∈ℤ cₖ δ(ω−2πk/N)",
        note: "δ ở đây là xung Dirac theo biến tần số. Một số dãy không có DTFT theo nghĩa tổng hội tụ thông thường, ví dụ bước đơn vị có cực ở z=1, cần phổ theo nghĩa phân bố."
      },
      {
        title: "Biên độ, pha và đối xứng phổ",
        body: "Với tín hiệu thực, phổ ở tần số âm là liên hợp của phổ ở tần số dương. Phổ độ lớn chẵn và pha lẻ theo modulo 2π tại nơi phổ khác 0. Dãy thực chẵn có DTFT thực và chẵn.",
        formula: "X(e^(−jω)) = X*(e^(jω))  nếu x[n] thực\n|X(e^(−jω))| = |X(e^(jω))|",
        note: "Dịch thời gian giữ độ lớn và đổi pha. Cepstrum thực là DTFT ngược của log|X(ω)|. Cepstrum phức dùng log X(ω), trong đó pha cần được tháo cuộn và chọn nhánh nhất quán."
      },
      {
        title: "Các tính chất DTFT",
        body: "Dịch thời gian tạo pha tuyến tính. Nhân với hàm mũ phức dịch phổ theo tần số. Tích chập ở miền mẫu tương ứng với nhân phổ, còn nhân từng mẫu tương ứng với tích chập phổ theo chu kỳ.",
        formula: "x[n−n₀] ↔ e^(−jωn₀)X(ω)\ne^(jω₀n)x[n] ↔ X(ω−ω₀)\nx ∗ h ↔ X(ω)H(ω)\nx[n]h[n] ↔ (1/(2π))∫₋π…π X(ν)H(ω−ν) dν"
      },
      {
        title: "Parseval và mật độ phổ",
        body: "Parseval cho phép tính năng lượng từ phổ thay vì từ tín hiệu. Đối với chuỗi Fourier, bình phương độ lớn từng hệ số là đóng góp công suất của họa âm đó. Với dãy hữu hạn năng lượng, biến đổi Fourier của tự tương quan là |X|².",
        formula: "E = ∫_ℝ |X(F)|² dF  trong thời gian liên tục\nE = (1/(2π))∫₋π…π |X(ω)|² dω  trong thời gian rời rạc\nP = Σₖ |cₖ|²  với k chạy qua các họa âm phân biệt\nDTFT{rₓₓ[ℓ]} = |X(ω)|²"
      },
      {
        title: "Độ dài tín hiệu và độ rộng phổ",
        body: "Một xung chữ nhật càng ngắn thì búp chính phổ càng rộng. Trong dãy rời rạc dài L mẫu, các điểm triệt gần ω=0 nhất nằm ở ±2π/L. Cắt tín hiệu theo thời gian tương đương với trộn phổ cùng phổ của cửa sổ.",
        formula: "Σ(n=0…L−1) e^(−jωn) = e^(−jω(L−1)/2) · sin(Lω/2)/sin(ω/2)",
        note: "Ở nơi mẫu số bằng 0, dùng giới hạn hoặc trở về tổng ban đầu. Tại ω=0, giá trị bằng L."
      },
      {
        title: "Băng thông và phân loại theo tần số",
        body: "Phổ thông thấp tập trung quanh tần số 0, còn phổ thông dải tập trung xa gốc. Dịch phổ của tín hiệu thực bằng điều chế cos tạo hai bản sao đối xứng. Với một dãy hoặc tín hiệu có thời lượng hữu hạn khác 0, không thể yêu cầu phổ đồng thời triệt hẳn trên cả một dải tần mở.",
        formula: "x(t)cos(2πF꜀t) ↔ (X(F−F꜀)+X(F+F꜀))/2",
        note: "Băng thông thực tế thường được mô tả theo ngưỡng suy hao hoặc phần năng lượng giữ lại."
      }
    ],
    example: {
      title: "Tìm DTFT của ba mẫu liên tiếp bằng 1",
      steps: [
        "Cho x[n] = 1 với n = 0, 1, 2 và bằng 0 ở ngoài đoạn đó.",
        "Thế vào tổng DTFT. X(ω) = 1 + e^(−jω) + e^(−j2ω).",
        "Đặt e^(−jω) ra ngoài. X(ω) = e^(−jω)(1+2cos ω), nên tại ω=0 phổ bằng 3.",
        "Các điểm triệt trong một chu kỳ nằm ở ω=±2π/3. Tính trực tiếp Σₙ|x[n]|² cho năng lượng E=3."
      ]
    },
    pitfalls: [
      "Thống nhất cách đo tần số. Đối số 2πFt dùng F theo Hz, còn ωn dùng ω theo radian mỗi mẫu.",
      "Dãy không tuần hoàn vẫn có DTFT tuần hoàn theo ω.",
      "Với chuỗi Fourier, cộng công suất qua các họa âm phân biệt. Với phổ năng lượng, dùng tích phân."
    ],
    quiz: [
      {
        q: "Một dãy thực bị dịch trễ 5 mẫu. Phổ độ lớn thay đổi thế nào?",
        options: ["Giữ nguyên", "Dịch 5 đơn vị tần số", "Giảm theo tần số"],
        answer: 0,
        why: "Phổ nhân với e^(−j5ω) có độ lớn 1 tại mọi ω. Phần thay đổi là pha."
      },
      {
        q: "Một dãy tuần hoàn 8 mẫu có bao nhiêu họa âm phức phân biệt trong một chu kỳ tần số?",
        options: ["4", "8", "Vô hạn"],
        answer: 1,
        why: "Chỉ số k và k+8 sinh cùng hàm mũ tại mọi n nguyên, nên có 8 lớp phân biệt."
      }
    ]
  },
  {
    id: 5,
    title: "Phân tích hệ LTI trong miền tần số",
    en: "Frequency-Domain Analysis of LTI Systems",
    pages: "307–394",
    group: "Nền tảng",
    intro: "Đáp ứng tần số cho biết hệ LTI làm từng thành phần tần số lớn lên, yếu đi hoặc lệch pha bao nhiêu. Chương này nối đáp ứng tần số với cực, điểm không, các bộ lọc cơ bản và khả năng khôi phục đầu vào.",
    topics: [
      {
        title: "Hàm mũ phức là hàm riêng",
        body: "Với hệ LTI và đáp ứng tần số tồn tại, đầu vào e^(jω₀n) cho đầu ra cùng tần số nhân với H tại ω₀. Với hệ có h thực, một cosin biên độ A đi qua hệ sẽ nhận hệ số độ lớn |H| và độ lệch pha ∠H.",
        formula: "H(ω) = Σₖ h[k]e^(−jωk)\ne^(jω₀n) → H(ω₀)e^(jω₀n)\nA cos(ω₀n+φ) → A|H(ω₀)|cos(ω₀n+φ+∠H(ω₀))",
        note: "Công thức cosin áp dụng trực tiếp cho đầu vào tồn tại mọi n. Nếu bật cosin tại n=0, hệ ổn định có thể còn đáp ứng quá độ."
      },
      {
        title: "Đầu ra theo phổ và định hình tín hiệu",
        body: "Tách đầu vào thành các thành phần tần số, nhân mỗi thành phần với đáp ứng hệ rồi biến đổi ngược. Với dãy tuần hoàn, áp dụng phép nhân đó riêng cho từng hệ số Fourier. Biên độ không đổi và pha tuyến tính trên dải tín hiệu cho đầu ra chỉ thay đổi hệ số và trễ.",
        formula: "Y(ω) = H(ω)X(ω)\ncᵧ[k] = H(2πk/N)cₓ[k]\nH(ω) = Ce^(−jωD) trên dải tín hiệu → y[n] = Cx[n−D]  với D nguyên."
      },
      {
        title: "Hình học cực và điểm không",
        body: "Đặt một điểm chạy dọc đường tròn đơn vị. Độ lớn H tỉ lệ với tích khoảng cách đến các điểm không chia cho tích khoảng cách đến các cực. Góc của H là tổng góc vectơ từ điểm không trừ tổng góc vectơ từ cực, cộng pha của hệ số K.",
        formula: "|H(e^(jω))| = |K| · Πᵢ |e^(jω)−zᵢ| / Πₘ |e^(jω)−pₘ|",
        note: "Điểm không đúng trên đường tròn đơn vị triệt tần số tương ứng. Cực gần đường tròn đơn vị thường tạo đỉnh nếu không bị một điểm không gần đó bù."
      },
      {
        title: "Pha, trễ pha và trễ nhóm",
        body: "Trễ pha biểu thị lượng dịch tương đương của một cosin riêng lẻ. Trễ nhóm là độ dốc âm của pha đã tháo cuộn, mô tả gần đúng độ trễ của bao tín hiệu hẹp băng. Pha tuyến tính cho trễ nhóm hằng ở dải xét, ngoài các điểm mà đáp ứng bằng 0.",
        formula: "τₚ(ω) = −φ(ω)/ω  với ω ≠ 0\nτg(ω) = −dφ(ω)/dω",
        note: "Với FIR thực dài L và h đối xứng hoặc phản đối xứng, trễ nhóm là (L−1)/2 mẫu trên các dải có đáp ứng khác 0."
      },
      {
        title: "Tương quan và phổ công suất qua hệ",
        body: "Tín hiệu ngẫu nhiên dừng theo nghĩa rộng đi qua bộ lọc ổn định có phổ công suất đầu ra được cân bằng theo |H|². Nếu kích thích bằng nhiễu trắng có phương sai σ², phổ công suất đầu ra tỉ lệ với |H|², còn phổ tương quan chéo đầu ra với đầu vào tỉ lệ với H.",
        formula: "Sᵧᵧ(ω) = |H(ω)|² Sₓₓ(ω)\nSᵧₓ(ω) = H(ω) Sₓₓ(ω)\nNhiễu trắng: Sₓₓ(ω)=σ²."
      },
      {
        title: "Dải lọc và giới hạn của bộ lọc lý tưởng",
        body: "Thông thấp giữ miền quanh 0, thông cao giữ miền gần ±π. Thông dải giữ một khoảng ở giữa, chắn dải loại bỏ khoảng đó. Đáp ứng thông thấp lý tưởng đổi mức tức thời ở tần số cắt, nên h kéo dài vô hạn về cả hai phía.",
        formula: "Thông thấp lý tưởng: H(ω)=1 nếu |ω|≤ω꜀, và 0 ở phần còn lại trong một chu kỳ.\nh[0]=ω꜀/π;  h[n]=sin(ω꜀n)/(πn) với n ≠ 0.",
        note: "Bộ lọc thực có dải chuyển tiếp hữu hạn. Thông số thường tách dải thông, dải chắn, gợn cho phép và suy hao."
      },
      {
        title: "Trung bình trượt, sai phân và bộ lọc lược",
        body: "Trung bình trượt giữ DC và làm yếu nhiều thành phần biến đổi nhanh. Sai phân bậc một triệt DC vì hai mẫu bằng nhau cho hiệu 0. Kéo giãn trễ từ một lên M mẫu tạo các đỉnh hoặc điểm triệt lặp lại trên phổ, như răng lược.",
        formula: "Trung bình L mẫu: H(z) = (1/L)Σ(k=0…L−1) z^(−k)\nSai phân bậc một: H(z) = 1−z⁻¹\nBộ lọc lược: H(z) = 1−z^(−M), triệt tại ω=2πk/M."
      },
      {
        title: "Cộng hưởng, triệt hẹp và dao động số",
        body: "Đặt một cặp cực bán kính r gần 1 tại góc ±ω₀ để tăng đáp ứng quanh tần số mục tiêu. Đặt thêm các điểm không tại e^(±jω₀) để tạo bộ triệt hẹp. Mạch dao động số lý tưởng dùng cặp cực trên đường tròn đơn vị và trạng thái đầu phù hợp.",
        formula: "Mẫu cộng hưởng: A(z) = 1−2r cos(ω₀)z⁻¹+r²z⁻²\nTử triệt hẹp: B(z) = 1−2 cos(ω₀)z⁻¹+z⁻²\nDao động: y[n] = 2 cos(ω₀)y[n−1]−y[n−2]",
        note: "Cặp cực trên đường tròn đơn vị duy trì dao động tự do lý tưởng. Một hệ nhân quả có các cực đó không ổn định BIBO."
      },
      {
        title: "Thông toàn, pha tối thiểu và lọc ngược",
        body: "Bộ thông toàn giữ độ lớn bằng 1 và điều chỉnh pha. Hệ hữu tỉ nhân quả ổn định có nghịch đảo nhân quả ổn định khi các điểm không cũng ở trong đường tròn đơn vị và không có trễ thuần cần đảo. Có thể tách hệ ổn định thành phần pha tối thiểu và thành phần thông toàn bằng cách phản xạ các điểm không ngoài đường tròn.",
        formula: "H_AP(z) = (z⁻¹−a*)/(1−az⁻¹), |a|<1\nH_ngược(z) = 1/H(z), nếu tồn tại nghịch đảo phù hợp.",
        note: "FIR có mọi điểm không ngoài đường tròn đơn vị được gọi là pha tối đa, còn điểm không ở cả hai phía cho pha hỗn hợp. Điểm không sát đường tròn có thể làm lọc ngược khuếch đại mạnh nhiễu."
      },
      {
        title: "Nhận dạng hệ và giải tích chập",
        body: "Biết đầu vào và đầu ra thì có thể suy ra hệ qua tỉ số phổ ở những tần số được kích thích đủ mạnh. Nếu cả hai thành phần của tích chập đều chưa biết, phương pháp đồng cấu dùng log phổ để biến tích thành tổng, rồi tách các phần khi chúng tập trung ở những miền cepstrum khác nhau.",
        formula: "Y(z) = X(z)H(z) → H(z) = Y(z)/X(z) tại X(z) ≠ 0\nlog Y = log X + log H  với nhánh log phức tương thích.",
        note: "Ví dụ trong phân tích tiếng nói, cepstrum hỗ trợ tách gần đúng kích thích và đặc tính đường phát âm khi chúng có cấu trúc khác nhau."
      }
    ],
    example: {
      title: "Dùng một bộ trung bình để bỏ dao động đổi dấu",
      steps: [
        "Cho y[n]=(x[n]+x[n−1])/2 và x[n]=cos(πn/3)+2cos(πn), xác định trên mọi n.",
        "Từ h[0]=h[1]=1/2, tính H(ω)=(1+e^(−jω))/2=e^(−jω/2)cos(ω/2).",
        "Tại ω=π, H=0. Thành phần 2cos(πn) đổi dấu ở mỗi mẫu nên bị triệt khi lấy trung bình hai mẫu kề nhau.",
        "Tại ω=π/3, độ lớn là √3/2 và pha là −π/6. Kết quả y[n]=(√3/2)cos(πn/3−π/6)."
      ]
    },
    pitfalls: [
      "Nhân |H| khi tính biên độ của thành phần sin, nhưng nhân |H|² khi tính phổ công suất.",
      "Để tính trễ nhóm, tháo cuộn pha trước khi lấy đạo hàm. Tại điểm triệt, pha không xác định.",
      "Bộ lọc ngược cần kiểm tra ổn định và khả năng khuếch đại nhiễu, đặc biệt gần các điểm không của H."
    ],
    quiz: [
      {
        q: "Với h[0]=h[1]=1/2, tần số nào bị triệt?",
        options: ["ω=0", "ω=π/2", "ω=π"],
        answer: 2,
        why: "Tại π, e^(−jπ)=−1 nên hai hạng trong H(π) triệt nhau."
      },
      {
        q: "Tại một tần số mà |H|=0,5, phổ công suất đầu ra bằng bao nhiêu lần phổ công suất đầu vào?",
        options: ["0,25 lần", "0,5 lần", "2 lần"],
        answer: 0,
        why: "Công suất tỉ lệ bình phương biên độ, nên hệ số là |H|²=0,25."
      }
    ]
  }
);
