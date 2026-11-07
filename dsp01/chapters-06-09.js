window.DSP_CHAPTERS.push(
  {
    id: 6,
    title: 'Lấy mẫu và khôi phục tín hiệu',
    en: 'Sampling and Reconstruction',
    pages: '395–460',
    group: 'Phổ và thuật toán',
    intro: 'Phổ của tín hiệu lấy mẫu là tổng các bản sao của phổ tương tự. Từ hình ảnh đó, ta biết khi nào có thể dựng lại tín hiệu, cách xử lý tín hiệu tương tự bằng bộ lọc số và cách tận dụng cấu trúc phổ hoặc tương quan giữa các mẫu để giảm chi phí chuyển đổi.',
    topics: [
      {
        title: 'Lấy mẫu trong thời gian, lặp phổ trong tần số',
        body: 'Nhân tín hiệu liên tục với chuỗi xung Dirac cách nhau T tạo ra chuỗi xung có trọng số x[n]. Phổ của chuỗi xung là các bản sao phổ gốc cách nhau Fs. Khi bản sao chồng nhau, bộ lấy mẫu đã cộng các thành phần đó vào cùng một tần số số.',
        formula: 'x[n] = xₐ(nT),  Fs = 1/T\nXₛ(F) = Fs ∑ₖ Xₐ(F − kFs)',
        note: 'F tính bằng Hz. Khi biểu diễn DTFT, đổi sang ω = 2πF/Fs.'
      },
      {
        title: 'Định lý lấy mẫu và nội suy sinc',
        body: 'Với phổ thông thấp giới hạn ở |F| ≤ B, chọn Fs > 2B để có khoảng cách giữa các bản sao. Lọc thông thấp lý tưởng giữ bản sao giữa và bù hệ số Fs. Trong miền thời gian, mỗi mẫu đóng góp một hàm sinc đặt tại thời điểm lấy mẫu.',
        formula: 'xₐ(t) = ∑ₙ x[n] sinc((t − nT)/T)\nsinc(u) = sin(πu)/(πu),  sinc(0) = 1',
        note: 'Nội suy lý tưởng dùng vô hạn mẫu. Bộ lọc chống chồng phổ thực tế cần dải chuyển tiếp.'
      },
      {
        title: 'Xử lý tín hiệu liên tục bằng hệ rời rạc',
        body: 'Chuỗi xử lý gồm lọc chống chồng phổ, A/D, lọc số, D/A và lọc khôi phục. Với lấy mẫu và khôi phục lý tưởng, đáp ứng của khâu số tại ω tương ứng với đáp ứng tương đương ở tần số tương tự F trong dải tái tạo.',
        formula: 'Hₐ(F) = H(e^{j2πF/Fs}) trong dải |F| < Fs/2',
        note: 'Quan hệ trên giả thiết phổ đầu vào nằm trong dải tái tạo và các khâu chuyển đổi lý tưởng.'
      },
      {
        title: 'ADC, lượng tử hóa và mã PCM',
        body: 'Mạch lấy và giữ ổn định điện áp trong khi ADC chọn một mức lượng tử. Các mức đều có cùng khoảng cách Δ. Mô hình nhiễu trắng đều xấp xỉ sai số khi tín hiệu trải qua nhiều mức, không quá tải và sai số ít tương quan với tín hiệu. PCM truyền chỉ số mức dưới dạng từ nhị phân.',
        formula: 'e[n] = Q(x[n]) − x[n],  |e[n]| ≤ Δ/2 khi làm tròn trong miền hợp lệ\nσₑ² ≈ Δ²/12,  R = bFs bit/s cho một kênh b bit/mẫu',
        note: 'Midtread có mức ra bằng 0. Midrise có ngưỡng quyết định tại 0.'
      },
      {
        title: 'DAC giữ bậc không',
        body: 'DAC giữ bậc không duy trì mức của một mẫu trong suốt một khoảng T. Xung chữ nhật đó tạo độ suy giảm sinc theo tần số và độ trễ pha. Bộ lọc sau DAC loại các ảnh phổ, còn cân bằng trong dải có thể bù độ suy giảm.',
        formula: 'h₀(t) = u(t) − u(t − T)\nH₀(F) = T sinc(FT)e^{−jπFT}'
      },
      {
        title: 'Lấy mẫu tín hiệu thông dải',
        body: 'Nếu phổ chỉ nằm trong dải [Fₗ, Fₕ] và dải đối xứng âm, một số tốc độ thấp hơn 2Fₕ vẫn giữ các ảnh phổ tách rời. Chọn một cửa sổ tốc độ hợp lệ rồi chừa biên cho dung sai và dải chuyển tiếp. Giáo trình cũng xét hai chuỗi lấy mẫu xen kẽ với độ lệch thời gian để tách các bản sao khi tái tạo.',
        formula: 'B = Fₕ − Fₗ\n2Fₕ/k ≤ Fs ≤ 2Fₗ/(k − 1),  1 ≤ k ≤ ⌊Fₕ/B⌋',
        note: 'Với k = 1 chỉ dùng cận dưới. Một số cửa sổ làm đảo thứ tự tần số sau khi gập phổ.'
      },
      {
        title: 'Tín hiệu giải tích và dải gốc phức',
        body: 'Biến đổi Hilbert cho thành phần vuông pha. Ghép thành tín hiệu giải tích rồi dịch xuống bằng dao động phức để biểu diễn một dải cao tần dưới dạng I/Q ở gần 0 Hz. Hai thành phần I và Q lưu thông tin cần để dựng lại tín hiệu thực.',
        formula: 'x₊(t) = xₐ(t) + jℋ{xₐ(t)}\nu(t) = x₊(t)e^{−j2πF꜀t},  xₐ(t) = Re{u(t)e^{j2πF꜀t}}'
      },
      {
        title: 'Lấy mẫu lại một dãy số',
        body: 'Giảm mẫu M giữ các mẫu ở chỉ số bội M. Lọc trước để phổ gốc còn trong |ω| < π/M nếu muốn tránh chồng phổ. Tăng mẫu L chèn L−1 số 0 giữa hai mẫu rồi lọc thông thấp để loại ảnh phổ, với hệ số khuếch đại L trong dải thông lý tưởng.',
        formula: 'y[n] = x[Mn]\nX↑L(e^{jω}) = X(e^{jLω}) trước bộ lọc nội suy'
      },
      {
        title: 'DPCM và điều chế delta',
        body: 'DPCM dự đoán mẫu hiện tại từ các mẫu đã khôi phục rồi lượng tử hóa phần dư. Với tín hiệu có tương quan theo thời gian, phần dư có thể có phương sai nhỏ hơn. Điều chế delta chọn tăng hay giảm mức ước lượng ở mỗi bước. Bước Δ lớn dễ theo kịp đoạn dốc và gây dao động rõ hơn ở đoạn phẳng.',
        formula: 'd[n] = x[n] − x̂[n],  x̃[n] = x̂[n] + Q(d[n])\nĐiều chế delta: max |dxₐ(t)/dt| ≲ Δ/T để tránh quá tải độ dốc'
      },
      {
        title: 'Lấy mẫu dư và sigma–delta',
        body: 'Lấy mẫu dư trải nhiễu lượng tử trên một dải lớn hơn. Vòng sigma–delta còn dồn phần lớn nhiễu lên vùng tần số cao. Sau đó bộ lọc số cắt nhiễu ngoài dải trước khi giảm tốc độ về mức cần thiết.',
        formula: 'OSR = Fs/(2B)\nMô hình sigma–delta bậc một: NTF(z) = 1 − z⁻¹',
        note: 'NTF có zero tại DC. Độ lợi nhiễu tiến về 0 ở tần số thấp trong mô hình tuyến tính.'
      }
    ],
    example: {
      title: 'Một tín hiệu ngoài dải lọt vào bản ghi 8 kHz',
      steps: [
        'Giả sử micro thu một cosin 5,5 kHz và ADC lấy mẫu ở 8 kHz. Tần số Nyquist của hệ là 4 kHz.',
        'Tần số chuẩn hóa là 5,5/8 = 0,6875 vòng/mẫu. Trừ 1 đưa nó về −0,3125 vòng/mẫu, tương ứng −2,5 kHz.',
        'Với cosin pha 0, hai tần số ±2,5 kHz cho cùng dãy mẫu. Vì vậy nhiễu 5,5 kHz xuất hiện như một thành phần 2,5 kHz.',
        'Nếu 2,5 kHz nằm trong dải cần giữ, đặt bộ lọc chống chồng phổ trước ADC để giảm thành phần 5,5 kHz.'
      ]
    },
    pitfalls: [
      'Quy tắc thông dải cần cả vị trí dải tần và độ rộng dải. Fs > 2B với B là độ rộng dải chưa đủ cho một tốc độ bất kỳ.',
      'Một khi hai phổ đã chồng nhau khi lấy mẫu, dữ liệu mẫu riêng lẻ thường không đủ để phân tách chúng.',
      'Sai số lượng tử không luôn có phân bố đều. Tín hiệu nhỏ, tuần hoàn hoặc bị quá tải có thể vi phạm mô hình nhiễu trắng.'
    ],
    quiz: [
      {
        q: 'Giảm tốc độ lấy mẫu đi 3 lần. Dải thông thấp lý tưởng trước khâu giữ mẫu nên giới hạn ở đâu trên trục tần số số ban đầu?',
        options: ['|ω| < π/3', '|ω| < 3π', '|ω| < 2π/3'],
        answer: 0,
        why: 'Tần số Nyquist mới bằng một phần ba tần số Nyquist cũ. Giữ |ω| < π/3 để các ảnh phổ không chồng khi giảm mẫu.'
      },
      {
        q: 'Bộ lọc nào trực tiếp giảm nhiễu ngoài dải do sigma–delta đẩy lên tần số cao trước khi giảm mẫu?',
        options: ['Bộ lọc thông cao', 'Bộ lọc thông thấp số', 'Mạch giữ bậc không'],
        answer: 1,
        why: 'Bộ lọc thông thấp giữ tín hiệu hữu ích và giảm nhiễu tần số cao trước khi khâu giảm mẫu có thể gập nhiễu vào dải.'
      }
    ]
  },
  {
    id: 7,
    title: 'DFT và phân tích phổ',
    en: 'Discrete Fourier Transform',
    pages: '461–522',
    group: 'Phổ và thuật toán',
    intro: 'DFT biểu diễn một khối N mẫu bằng N hệ số phức trên lưới tần số. Chương này nối DFT với DTFT, giải thích tính tuần hoàn của các chỉ số và dùng cấu trúc đó để lọc, phân tích phổ và xây dựng DCT.',
    topics: [
      {
        title: 'Lấy mẫu DTFT và phép biến đổi ngược',
        body: 'Với x[n] bằng 0 ngoài n = 0,…,N−1, DFT lấy giá trị DTFT tại các góc ωₖ = 2πk/N. IDFT khôi phục N mẫu bằng tính trực giao của các mũ phức. DFT cũng lấy mẫu biến đổi Z trên đường tròn đơn vị khi DTFT tồn tại.',
        formula: 'X[k] = ∑_{n=0}^{N−1} x[n]e^{−j2πkn/N}\nx[n] = (1/N) ∑_{k=0}^{N−1} X[k]e^{j2πkn/N}',
        note: 'Trong quy ước này hệ số 1/N nằm ở phép ngược.'
      },
      {
        title: 'Lấy mẫu theo tần số và chồng trong thời gian',
        body: 'Nếu lấy N điểm DTFT của một dãy dài hơn N mẫu, IDFT trả về tổng các mẫu cùng lớp dư modulo N. Nếu chỉ có một mẫu khác 0 trong mỗi lớp dư, vẫn có thể tránh chồng trong thời gian.',
        formula: 'xₚ[n] = ∑ₗ x[n + lN]'
      },
      {
        title: 'Trục bin, DC và đối xứng liên hợp',
        body: 'Khoảng cách giữa các bin là Fs/N. Bin k = 0 chứa tổng các mẫu, vì vậy X[0]/N là trung bình. Các bin phía trên Nyquist đại diện cho tần số âm. Với dữ liệu thực, nửa phổ âm là ảnh liên hợp của nửa phổ dương.',
        formula: 'Fₖ = kFs/N khi k ≤ N/2,  Fₖ = (k − N)Fs/N khi k > N/2\nX[(-k) mod N] = X*[k] nếu x[n] thực'
      },
      {
        title: 'Dịch vòng, điều chế và Parseval',
        body: 'Dịch vòng tín hiệu làm đổi pha theo một đường thẳng trên chỉ số bin. Nhân với mũ phức đúng lưới dịch vòng phổ. Parseval cho phép tính năng lượng từ mẫu thời gian hoặc hệ số tần số với hệ số chuẩn hóa tương ứng.',
        formula: 'x[(n − m) mod N] ↔ e^{−j2πkm/N}X[k]\nx[n]e^{j2πrn/N} ↔ X[(k − r) mod N]\n∑ₙ |x[n]|² = (1/N) ∑ₖ |X[k]|²'
      },
      {
        title: 'Tích chập vòng và tích chập tuyến tính',
        body: 'Nhân hai DFT rồi lấy IDFT cho tích chập vòng. Để tính tích chập tuyến tính của hai dãy dài L và M, đệm cả hai lên ít nhất L+M−1 mẫu. Khi ấy không có phần đuôi quay về đầu.',
        formula: 'y[n] = ∑_{m=0}^{N−1} x[m]h[(n − m) mod N]\nDFT{y}[k] = X[k]H[k],  N ≥ L + M − 1 để tránh cuộn vòng'
      },
      {
        title: 'Lọc dữ liệu dài theo khối',
        body: 'Overlap-add chia dữ liệu thành các khối rời, lọc từng khối với đệm 0 rồi cộng phần đuôi bị chồng. Overlap-save cho các khối đầu vào chồng nhau M−1 mẫu và bỏ M−1 mẫu đầu đã bị tích chập vòng làm sai ở mỗi khối.',
        formula: 'Với DFT N điểm và bộ lọc M hệ số, số mẫu đầu ra hữu ích mỗi khối là L = N − M + 1.'
      },
      {
        title: 'Rò phổ và lựa chọn cửa sổ',
        body: 'Quan sát trong thời gian hữu hạn tương đương nhân với cửa sổ, làm phổ gốc trải ra theo phổ cửa sổ. Cửa sổ Hann giảm thùy phụ và làm rộng thùy chính so với cửa sổ chữ nhật. Dùng thùy chính hẹp khi cần tách hai đỉnh gần nhau và thùy phụ thấp khi cần tìm thành phần yếu cạnh đỉnh mạnh.',
        formula: 'xw[n] = x[n]w[n],  ΔFbin = Fs/N',
        note: 'Đệm 0 làm lưới bin dày hơn. Độ dài dữ liệu thực và cửa sổ quyết định khả năng phân giải hai thành phần gần nhau.'
      },
      {
        title: 'DCT và tập trung năng lượng',
        body: 'DCT-II dùng các sóng cosin làm cơ sở thực, có thể liên hệ với DFT của dãy mở rộng chẵn. Với dữ liệu biến thiên trơn, nhiều năng lượng thường tập trung vào các hệ số đầu. Điều này hữu ích khi nén một khối ảnh hoặc tín hiệu.',
        formula: 'DCT-II chuẩn trực giao: C[k] = αₖ ∑_{n=0}^{N−1} x[n] cos(π(n + 1/2)k/N)\nα₀ = √(1/N),  αₖ = √(2/N) khi k > 0'
      }
    ],
    example: {
      title: 'Tính tích chập bằng DFT với đệm 0',
      steps: [
        'Chọn x = [1, 2] và h = [1, −1]. Tích chập tuyến tính cần 2+2−1 = 3 mẫu. Ta dùng N = 4 và đệm 0.',
        'DFT của hai dãy đệm lần lượt là X = [3, 1−2j, −1, 1+2j] và H = [0, 1+j, 2, 1−j].',
        'Nhân theo bin được Y = [0, 3−j, −2, 3+j]. IDFT trả về [1, 1, −2, 0].',
        'Ba mẫu đầu là tích chập tuyến tính. Nếu dùng N = 2, mẫu −2 cuộn về đầu và kết quả vòng là [−1, 1].'
      ]
    },
    pitfalls: [
      'Với tín hiệu thực, phổ hai phía có cặp liên hợp. Khi đổi sang biên độ một phía, xử lý riêng bin DC và bin Nyquist nếu N chẵn.',
      'Độ lớn |X[k]| phụ thuộc N và cửa sổ. Chuẩn hóa theo mục tiêu trước khi đọc biên độ tuyệt đối.',
      'Nhân DFT theo từng bin tương ứng tích chập vòng. Chọn N theo độ dài đầu ra nếu bài toán cần tích chập tuyến tính.'
    ],
    quiz: [
      {
        q: 'DFT 256 điểm của tín hiệu lấy mẫu ở 8 kHz có khoảng cách giữa hai bin kề là bao nhiêu?',
        options: ['125 Hz', '31,25 Hz', '62,5 Hz'],
        answer: 1,
        why: 'Khoảng bin là Fs/N = 8000/256 = 31,25 Hz.'
      },
      {
        q: 'Khối DFT 64 điểm lọc bằng FIR dài 17 mẫu theo overlap-save. Mỗi khối giữ bao nhiêu mẫu ra?',
        options: ['17', '47', '48'],
        answer: 2,
        why: 'Bỏ M−1 = 16 mẫu đầu bị ảnh hưởng bởi cuộn vòng. Còn 64−16 = 48 mẫu.'
      }
    ]
  },
  {
    id: 8,
    title: 'FFT và thuật toán tính DFT',
    en: 'Fast Fourier Transform Algorithms',
    pages: '523–576',
    group: 'Phổ và thuật toán',
    intro: 'FFT tính đúng các hệ số DFT bằng cách tái sử dụng các phép tính giống nhau. Chương này đi từ cấu trúc cánh bướm đến cách chọn thuật toán cho nhiều bin, một số bin hoặc một cung tần số hẹp.',
    topics: [
      {
        title: 'Hệ số xoay và độ phức tạp',
        body: 'Ký hiệu Wₙ gom các mũ phức dùng trong DFT. Tính trực tiếp cần N² phép nhân phức theo công thức tổng đầy đủ. FFT radix-2 có log₂N tầng, mỗi tầng ghép N/2 cặp, nên số phép tính tăng theo N log₂N.',
        formula: 'Wₙ = e^{−j2π/N},  Wₙ^{k+N} = Wₙ^k,  Wₙ^{k+N/2} = −Wₙ^k khi N chẵn\nRadix-2: (N/2)log₂N phép nhân và Nlog₂N phép cộng phức trước tối ưu hệ số đặc biệt'
      },
      {
        title: 'Radix-2 DIT: chia theo chỉ số thời gian',
        body: 'Tách mẫu chẵn và mẫu lẻ thành hai DFT N/2 điểm, gọi là E và O. Với mỗi k, xoay O[k] một lần rồi dùng kết quả cho cả nhánh cộng lẫn nhánh trừ. Đây là cánh bướm DIT (decimation in time).',
        formula: 'X[k] = E[k] + Wₙ^k O[k]\nX[k + N/2] = E[k] − Wₙ^k O[k],  0 ≤ k < N/2',
        note: 'Lặp chia đến DFT 2 điểm, chỉ còn tổng và hiệu của hai mẫu.'
      },
      {
        title: 'Radix-2 DIF: chia theo chỉ số tần số',
        body: 'Ghép nửa đầu và nửa cuối của dãy ngay ở tầng đầu. DFT N/2 điểm của nhánh tổng sinh các bin chẵn. Nhánh hiệu được nhân hệ số xoay trước DFT N/2 điểm để sinh các bin lẻ.',
        formula: 'u[n] = x[n] + x[n + N/2]\nv[n] = (x[n] − x[n + N/2])Wₙ^n\nX[2k] = DFT_{N/2}{u}[k],  X[2k+1] = DFT_{N/2}{v}[k]'
      },
      {
        title: 'Đảo bit, radix-4 và split-radix',
        body: 'Ở sơ đồ radix-2 tại chỗ điển hình, DIT dùng đầu vào đảo bit và cho đầu ra đúng thứ tự. DIF đi theo chiều ngược lại. Radix-4 gom mỗi tầng bốn nhánh khi N là lũy thừa của 4. Split-radix phối hợp một bài toán N/2 và hai bài toán N/4 để giảm phép toán.',
        formula: 'N = 8: đảo 011₂ thành 110₂, nên chỉ số 3 đổi vị trí với chỉ số 6.',
        note: 'N có thừa số khác 2 vẫn có thể dùng FFT với cách phân rã phù hợp.'
      },
      {
        title: 'IFFT và dữ liệu thực',
        body: 'Phép biến đổi ngược đổi dấu số mũ và chia cho N. Có thể dùng cùng mã FFT bằng cách liên hợp trước và sau. Với tín hiệu thực, tính đối xứng liên hợp cho phép ghép hai dãy thực thành một dãy phức rồi tách lại hai phổ.',
        formula: 'IFFT(X) = (1/N) conj(FFT(conj(X)))'
      },
      {
        title: 'Ứng dụng FFT vào lọc và tương quan',
        body: 'Lọc FIR dài bằng cách tính phổ khối dữ liệu, nhân với phổ bộ lọc đã lưu rồi lấy IFFT. Căn chỉnh kích thước khối theo overlap-add hoặc overlap-save. Tương quan có thể tính bằng tích phổ với một phía liên hợp.',
        formula: 'y = IFFT(FFT(x)·FFT(h)) với đệm thích hợp\nrₓᵧ[l] = ∑ₙ x[n+l]y*[n] ↔ X[k]Y*[k]'
      },
      {
        title: 'Goertzel cho một số bin chọn trước',
        body: 'Goertzel dùng truy hồi bậc hai để tính một bin mong muốn với ít bộ nhớ. Đặt trạng thái ban đầu bằng 0 và chỉ lấy kết quả sau khi đã đưa đủ N mẫu vào. Đây là lựa chọn phù hợp khi chỉ cần kiểm tra vài tần số đã biết.',
        formula: 's[n] = x[n] + 2cos(ωₖ)s[n−1] − s[n−2],  ωₖ = 2πk/N\nVới x[n] thực: |X[k]|² = s[N−1]² + s[N−2]² − 2cos(ωₖ)s[N−1]s[N−2]'
      },
      {
        title: 'Chirp-Z và sai số số học',
        body: 'Chirp-Z dùng tích chập để lấy mẫu biến đổi Z dọc theo một cung hoặc đường xoắn ốc. Chọn cung trên đường tròn đơn vị nếu muốn khảo sát dày một vùng tần số. Khi dùng số cố định, theo dõi độ tăng biên độ qua cánh bướm và đặt hệ số chia thích hợp để tránh tràn.',
        formula: 'zₖ = A·W^(−k),  X(zₖ) = ∑ₙ x[n]zₖ^(−n)\n|a + b| ≤ |a| + |b|',
        note: 'Lưới Chirp-Z dày không thay thế cho thời gian quan sát dài. Lưu tổng hệ số chia để khôi phục thang biên độ.'
      }
    ],
    example: {
      title: 'Ghép hai DFT 2 điểm để tính FFT 4 điểm',
      steps: [
        'Với x = [1, 2, 3, 4], nhánh chẵn lấy [1, 3] và nhánh lẻ lấy [2, 4].',
        'DFT 2 điểm dùng tổng và hiệu, nên E = [4, −2] và O = [6, −2].',
        'Ở k = 0, W₄⁰ = 1. Suy ra X[0] = 4+6 = 10 và X[2] = 4−6 = −2.',
        'Ở k = 1, W₄¹ = −j. Suy ra X[1] = −2+2j và X[3] = −2−2j. Hai bin này là một cặp liên hợp.'
      ]
    },
    pitfalls: [
      'FFT trả cùng phổ với DFT theo cùng dấu số mũ và chuẩn hóa. Khác biệt nằm ở thứ tự và số phép tính.',
      'Đảo bit là sắp xếp chỉ số của sơ đồ thuật toán. Sắp phổ theo tần số âm và dương là một phép đổi thứ tự khác.',
      'Dùng Goertzel cho nhiều bin có thể tốn hơn FFT. So sánh chi phí theo số bin cần tính và kích thước khối.'
    ],
    quiz: [
      {
        q: 'Radix-2 FFT 1024 điểm có bao nhiêu tầng cánh bướm?',
        options: ['9', '10', '512'],
        answer: 1,
        why: 'Mỗi tầng chia một hệ số 2 và 1024 = 2¹⁰.'
      },
      {
        q: 'Dùng một hàm FFT thuận để tính IFFT. Thứ tự thao tác nào phù hợp?',
        options: ['Liên hợp → FFT → liên hợp → chia N', 'FFT → nhân N', 'FFT → đảo bit → liên hợp'],
        answer: 0,
        why: 'Hai phép liên hợp làm đổi dấu pha trong số mũ. Hệ số 1/N cho đúng quy ước biến đổi ngược.'
      }
    ]
  },
  {
    id: 9,
    title: 'Triển khai hệ rời rạc',
    en: 'Implementation of Discrete-Time Systems',
    pages: '577–668',
    group: 'Phổ và thuật toán',
    intro: 'Một hàm truyền có thể được triển khai bằng nhiều sơ đồ có cùng đáp ứng lý tưởng. Chương này chỉ ra cách chọn cấu trúc theo số ô nhớ, phép tính, độ nhạy với lượng tử hệ số và hành vi khi phần cứng làm tròn hoặc tràn số.',
    topics: [
      {
        title: 'Phương trình sai phân và sơ đồ khối',
        body: 'Một khâu z⁻¹ giữ một mẫu. Phương trình sai phân biến trực tiếp thành mạng khâu trễ, nhân hệ số và cộng. Với điều kiện đầu bằng 0, biến đổi Z của phương trình cho hàm truyền. Đếm các phần tử để ước tính chi phí triển khai.',
        formula: 'y[n] = ∑_{k=0}^M bₖx[n−k] − ∑_{k=1}^N aₖy[n−k]\nH(z) = (∑_{k=0}^M bₖz^(−k))/(1 + ∑_{k=1}^N aₖz^(−k))'
      },
      {
        title: 'Cấu trúc FIR trực tiếp và đối xứng pha tuyến tính',
        body: 'Với FIR, các hệ số chính là các mẫu đáp ứng xung. Khi đáp ứng xung đối xứng hoặc phản đối xứng, ghép hai mẫu đầu vào dùng cùng trị tuyệt đối của hệ số trước phép nhân để giảm số phép nhân.',
        formula: 'y[n] = ∑_{k=0}^M h[k]x[n−k]\nNếu h[k] = h[M−k], ghép h[k](x[n−k] + x[n−M+k]).'
      },
      {
        title: 'FIR mắc nối tiếp và cấu trúc lấy mẫu tần số',
        body: 'Một FIR dài có thể phân tích thành tích các đa thức bậc thấp. Cấu trúc lấy mẫu tần số dùng DFT của đáp ứng xung để tạo các nhánh cộng hưởng, có lợi khi nhiều giá trị H[k] bằng 0. Phép triệt cực và zero trong biểu thức chính xác cần được kiểm tra khi dùng hệ số hữu hạn.',
        formula: 'H(z) = [(1 − z^(−L))/L] ∑_{k=0}^{L−1} H[k]/(1 − e^{j2πk/L}z⁻¹)',
        note: 'Ở đây L là độ dài FIR, H[k] là DFT L điểm của h[n]. Dùng cặp liên hợp để ghép nhánh thực.'
      },
      {
        title: 'IIR Direct Form I, Direct Form II và dạng chuyển vị',
        body: 'Dạng I giữ riêng lịch sử x và y. Dạng II đổi thứ tự mắc các phần cực và zero để dùng chung chuỗi trạng thái w. Dạng chuyển vị đảo mũi tên và đổi đầu vào với đầu ra trên sơ đồ dòng tín hiệu. Các dạng có cùng hàm truyền lý tưởng và có thể cho sai số thực thi khác nhau.',
        formula: 'Dạng II: w[n] = x[n] − ∑_{k=1}^N aₖw[n−k]\ny[n] = ∑_{k=0}^M bₖw[n−k]',
        note: 'Dạng I dùng M+N khâu trễ. Dạng II dùng max(M,N) khâu trễ khi không xét triệt tiêu thừa.'
      },
      {
        title: 'IIR dạng nối tiếp và song song',
        body: 'Dạng nối tiếp phân tích H(z) thành tích các khâu bậc nhất hoặc bậc hai, thường gọi khâu bậc hai là biquad. Dạng song song dùng phân tích phân thức để cộng các nhánh. Khi ghép các cực liên hợp vào cùng một khâu, hệ số của khâu có thể giữ ở dạng thực.',
        formula: 'Nối tiếp: H(z) = G∏ᵢ Hᵢ(z)\nSong song: H(z) = P(z) + ∑ᵢ Hᵢ(z)',
        note: 'Thứ tự, cách ghép cực với zero và phân bố gain ảnh hưởng đến mức tín hiệu bên trong.'
      },
      {
        title: 'Cấu trúc lưới và lưới–thang',
        body: 'Lưới dùng các cặp nhánh thuận và ngược, được ghép ở mỗi tầng bởi hệ số phản xạ Kₘ. Lưới tạo hệ toàn zero hoặc toàn cực theo cách bố trí. Nhánh thang lấy tổng có trọng số các tín hiệu tầng để tạo thêm phần zero trong hệ IIR tổng quát.',
        formula: 'Kiểm tra hệ toàn cực thực ở dạng lưới chuẩn: |Kₘ| < 1 ở mọi tầng để ổn định.'
      },
      {
        title: 'Số cố định, số dấu phẩy động và sai số',
        body: 'Số cố định biểu diễn theo lưới có bước Δ với dải hữu hạn. Số dấu phẩy động dùng phần định trị và số mũ nên bước hiệu dụng phụ thuộc độ lớn. Làm tròn về mức gần nhất giữ sai số trong nửa bước khi không tràn. Tràn có thể làm giá trị cuộn vòng hoặc bão hòa tùy phép toán.',
        formula: 'Số cố định có b bit phần lẻ: Δ = 2⁻ᵇ\nSai số làm tròn trong dải: |e| ≤ Δ/2'
      },
      {
        title: 'Lượng tử hệ số và độ nhạy cực–zero',
        body: 'Mỗi hệ số sau lượng tử hóa làm đa thức đổi nhẹ, kéo theo cực và zero dịch vị trí. Cực nằm sát đường tròn đơn vị có thể vượt ra ngoài sau lượng tử hóa. Khâu bậc hai tách các cặp cực khỏi một đa thức bậc cao chung, giúp kiểm soát ảnh hưởng khi kiểm tra từng khâu.',
        formula: 'Cực p = re^{jθ}: ổn định nhân quả yêu cầu r < 1 sau khi lượng tử hệ số.'
      },
      {
        title: 'Nhiễu làm tròn và dao động giới hạn',
        body: 'Trong vòng phản hồi, sai số làm tròn có thể duy trì một giá trị hoặc dao động lặp lại dù đầu vào đã về 0. Tràn cuộn vòng cũng có thể gây dao động giới hạn. Chọn độ rộng tích lũy, quy tắc tràn và hệ số tỉ lệ theo mức lớn nhất của các trạng thái.',
        formula: 'Nếu |x[n]| ≤ Xₘₐₓ thì |y[n]| ≤ Xₘₐₓ ∑ₖ |h[k]| với hệ ổn định.',
        note: 'Khi dùng mô hình nhiễu cộng độc lập, mỗi nguồn sai số đi qua một hàm truyền khác nhau tới đầu ra.'
      }
    ],
    example: {
      title: 'Tính ba mẫu đầu của một IIR dạng II',
      steps: [
        'Chọn H(z) = (0,5 + 0,25z⁻¹)/(1 − 0,5z⁻¹). Viết w[n] = x[n] + 0,5w[n−1] và y[n] = 0,5w[n] + 0,25w[n−1].',
        'Dùng đầu vào x[n] = δ[n] và trạng thái w[−1] = 0. Khi n = 0, w[0] = 1, y[0] = 0,5.',
        'Khi n = 1, w[1] = 0,5, y[1] = 0,5. Khi n = 2, w[2] = 0,25, y[2] = 0,25.',
        'Mỗi lần tính chỉ cần giá trị w trước đó. Cực p = 0,5 cho phần đuôi đáp ứng suy giảm dần.'
      ]
    },
    pitfalls: [
      'Nếu mẫu số được ghi 1 + ∑ aₖz^(−k), hồi tiếp trong phương trình sai phân mang dấu trừ trước aₖ.',
      'Đầu ra nhỏ không bảo đảm các trạng thái bên trong nhỏ. Kiểm tra độ lợi từng khâu để bố trí hệ số tỉ lệ.',
      'Bão hòa giúp xử lý dạng tràn cuộn vòng. Sai số làm tròn bên trong phản hồi vẫn có thể gây dao động giới hạn.'
    ],
    quiz: [
      {
        q: 'Với M = 4 và N = 6, Direct Form II điển hình dùng bao nhiêu khâu trễ?',
        options: ['10', '4', '6'],
        answer: 2,
        why: 'Dạng II dùng chung bộ nhớ cho hai phần, nên cần max(4,6) = 6 khâu trễ.'
      },
      {
        q: 'IIR nhân quả có một cực chuyển từ r = 0,998 sang r = 1,001 sau khi lượng tử hệ số. Điều gì xảy ra nếu cực không bị triệt?',
        options: ['Hệ mất ổn định BIBO', 'Hệ tự động chuyển thành FIR', 'Đáp ứng giữ nguyên vì thay đổi nhỏ'],
        answer: 0,
        why: 'Với hệ hữu tỉ nhân quả, cực ngoài đường tròn đơn vị làm đáp ứng xung không tuyệt đối khả tổng.'
      }
    ]
  }
);
