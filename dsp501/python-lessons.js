window.DSP_PYTHON_LESSONS = [
  {
    id: "lay-mau",
    title: "Vẽ tín hiệu liên tục và các mẫu",
    decks: [1], chapter: 1, topic: 3,
    keywords: "Python NumPy Matplotlib sampling sample rate plot stem",
    intro: "Dùng plot cho đường sóng và stem cho các mẫu. Tần số F tính bằng Hz, Fs tính bằng mẫu/giây.",
    change: "Khi đổi đề, sửa F, Fs và khoảng thời gian. Giữ công thức cos(2πFt).",
    expected: "Sóng 2 Hz được lấy 8 mẫu/giây. Giữa hai mẫu liên tiếp sóng đi 1/4 vòng.",
    exercise: "Đổi F = 7 và giữ Fs = 8. So sánh giá trị mẫu với sóng cos 1 Hz.",
    code: `import numpy as np
import matplotlib.pyplot as plt

F = 2
Fs = 8
t = np.linspace(0, 1, 1000)
n = np.arange(Fs + 1)
tn = n / Fs

x = np.cos(2 * np.pi * F * t)
xn = np.cos(2 * np.pi * F * tn)

plt.plot(t, x, label="Continuous signal")
plt.stem(tn, xn, linefmt="C1-", markerfmt="C1o", basefmt=" ")
plt.xlabel("Time (s)")
plt.ylabel("Amplitude")
plt.grid()
plt.legend()
plt.show()`
  },
  {
    id: "luong-tu",
    title: "Lượng tử hóa bằng làm tròn",
    decks: [1], chapter: 1, topic: 8,
    keywords: "Python NumPy quantization rounding quantization error",
    intro: "Ánh xạ mỗi mẫu tới mức gần nhất. Ví dụ dùng các mức 0; 0,1; …; 1,0.",
    change: "Sửa x và delta theo dãy và bước lượng tử của đề.",
    expected: "0,81 thành 0,8; 0,729 thành 0,7; 0,6561 thành 0,7. Sai số có độ lớn không quá delta/2.",
    exercise: "Đổi delta = 0.05 rồi so sánh sai số với delta = 0.1.",
    code: `import numpy as np
import matplotlib.pyplot as plt

n = np.arange(10)
x = 0.9 ** n
delta = 0.1
xq = delta * np.round(x / delta)
error = xq - x

print("xq =", np.round(xq, 3))
print("error =", np.round(error, 5))
plt.plot(n, x, "o-", label="Original samples")
plt.step(n, xq, where="mid", label="Quantized samples")
plt.xlabel("n")
plt.ylabel("Amplitude")
plt.grid()
plt.legend()
plt.show()`
  },
  {
    id: "so-phuc",
    title: "Số phức và mặt phẳng Z",
    decks: [4], chapter: 3, topic: 3,
    keywords: "Python complex number real imaginary magnitude phase np.angle pole zero",
    intro: "Trong Python, 1j là đơn vị ảo. real, imag, abs và angle tương ứng phần thực, phần ảo, độ lớn và góc.",
    change: "Sửa z theo số phức trong đề. np.angle trả radian, dùng np.degrees nếu cần độ.",
    expected: "Với z = 4 + 3j, độ lớn bằng 5 và góc khoảng 36,87 độ.",
    exercise: "Đổi z thành 0.9 * np.exp(1j * np.pi / 4) để đánh dấu cực của ví dụ biến đổi Z.",
    code: `import numpy as np
import matplotlib.pyplot as plt

z = 4 + 3j
print("Real:", np.real(z))
print("Imaginary:", np.imag(z))
print("Magnitude:", np.abs(z))
print("Phase (degrees):", np.degrees(np.angle(z)))

plt.plot(np.real(z), np.imag(z), "rx")
plt.axhline(0, color="black", linewidth=0.5)
plt.axvline(0, color="black", linewidth=0.5)
plt.xlabel("Re(z)")
plt.ylabel("Im(z)")
plt.axis("equal")
plt.grid()
plt.show()`
  },
  {
    id: "day-co-ban",
    title: "Dãy bước và dãy mũ rời rạc",
    decks: [2], chapter: 2, topic: 0,
    keywords: "Python NumPy discrete time sequence unit step exponential signal stem",
    intro: "Biểu diễn u[n] bằng điều kiện n >= 0, rồi nhân với a**n để có aⁿu[n].",
    change: "Sửa a và phạm vi n. Nếu cần dịch u[n−k], đổi điều kiện thành n >= k.",
    expected: "Dãy bằng 0 khi n < 0, bằng 1 tại n = 0 rồi giảm theo lũy thừa 0,8.",
    exercise: "Vẽ 0.8**(n-3) * (n >= 3) và đối chiếu với dãy ban đầu dịch phải 3 mẫu.",
    code: `import numpy as np
import matplotlib.pyplot as plt

n = np.arange(-5, 21)
a = 0.8
u = (n >= 0).astype(int)
x = a ** n * u

plt.stem(n, x)
plt.xlabel("n")
plt.ylabel("x[n]")
plt.title("x[n] = 0.8**n u[n]")
plt.grid()
plt.show()`
  },
  {
    id: "tich-chap",
    title: "Tích chập tuyến tính hai dãy",
    decks: [2], chapter: 2, topic: 3,
    keywords: "Python NumPy convolution np.convolve impulse response LTI",
    intro: "np.convolve với mode='full' trả toàn bộ tích chập tuyến tính. Độ dài kết quả là len(x) + len(h) − 1.",
    change: "Sửa hai mảng x, h và chỉ số đầu nx0, nh0 theo đề.",
    expected: "x = [1, 2, 1], h = [1, −1] cho y = [1, 1, −1, −1].",
    exercise: "Đổi h thành [0.5, 0.5] để xem tác dụng của bộ trung bình hai điểm.",
    code: `import numpy as np
import matplotlib.pyplot as plt

x = np.array([1, 2, 1])
h = np.array([1, -1])
nx0 = 0
nh0 = 0

y = np.convolve(x, h, mode="full")
n = np.arange(nx0 + nh0, nx0 + nh0 + len(y))

print("y =", y)
plt.stem(n, y)
plt.xlabel("n")
plt.ylabel("y[n]")
plt.title("Linear convolution")
plt.grid()
plt.show()`
  },
  {
    id: "tuong-quan",
    title: "Tìm độ trễ bằng tương quan chéo",
    decks: [2], chapter: 2, topic: 9,
    keywords: "Python SciPy cross correlation signal.correlate correlation_lags delay estimation",
    intro: "Tính correlate(y, x) khi y là bản bị trễ của x. Cặp hàm correlation_lags dùng đúng thứ tự và độ dài hai dãy.",
    change: "Sửa x hoặc delay. Giữ cùng thứ tự y, x trong correlate và correlation_lags.",
    expected: "Đỉnh tương quan ở lag = 3 khi y là x bị trễ 3 mẫu.",
    exercise: "Đổi delay = 5 và kiểm tra vị trí đỉnh. Thử đổi thứ tự correlate(x, y) để quan sát dấu độ trễ.",
    code: `import numpy as np
import matplotlib.pyplot as plt
from scipy import signal

x = np.array([1., -1., 2., 0., 1.])
delay = 3
y = np.pad(x, (delay, 0))

corr = signal.correlate(y, x, mode="full")
lags = signal.correlation_lags(len(y), len(x), mode="full")
estimated_delay = lags[np.argmax(corr)]

print("Estimated delay:", estimated_delay)
plt.stem(lags, corr)
plt.xlabel("Lag (samples)")
plt.ylabel("Cross-correlation")
plt.grid()
plt.show()`
  },
  {
    id: "z-surface",
    title: "Vẽ mặt 3D của |X(z)| theo mẫu thầy",
    decks: [4], chapter: 3, topic: 3,
    keywords: "Python Matplotlib z-transform 3D surface meshgrid complex magnitude plot_surface",
    intro: "Dùng mẫu plot_surface em đã gửi. H = X + 1j*Y biểu diễn z. Chỉ thay công thức Z bằng độ lớn của phân thức trong đề.",
    change: "Hai dòng gắn với đề là H = X + Y*1j và Z = np.abs(...). Giữ cách dựng lưới, cmap và trục của mẫu.",
    expected: "Hai đỉnh gần 0,6366 ± j0,6362 và vùng lõm ở z = 1. Trục đứng trong mẫu hiển thị đến 20.",
    exercise: "Đọc lại hệ số 1.2732 và 0.81 từ đề rồi đối chiếu từng hạng tử với code.",
    note: "Mẫu dùng lũy thừa âm nên cần H khác 0. Nếu lưới có điểm 0 chính xác, công thức tương đương (H - 1)/(H**2 - 1.2732*H + 0.81) tính được giới hạn tại 0. Các cực vẫn là điểm kỳ dị.",
    code: `import matplotlib.pyplot as plt
import numpy as np
from matplotlib import cm

fig = plt.figure(figsize=plt.figaspect(0.5))
ax = fig.add_subplot(1, 1, 1, projection="3d")

X = np.arange(-5, 5, 0.1)
Y = np.arange(-5, 5, 0.1)
X, Y = np.meshgrid(X, Y)
H = X + Y * 1j
Z = np.abs(
    (H**-1 - H**-2) /
    (1 - 1.2732 * H**-1 + 0.81 * H**-2)
)

surf = ax.plot_surface(
    X, Y, Z, rstride=1, cstride=1, cmap=cm.coolwarm,
    linewidth=0, antialiased=False
)
ax.set_zlim(-1, 20.)
fig.colorbar(surf, shrink=0.5, aspect=10)
plt.show()`
  },
  {
    id: "dap-ung-he",
    title: "Đáp ứng xung và đáp ứng bước",
    decks: [2, 4], chapter: 2, topic: 6,
    keywords: "Python SciPy signal.lfilter impulse response step response difference equation",
    intro: "Với lfilter, b và a là hệ số theo z⁻¹. Bộ trung bình ba điểm có b = [1/3, 1/3, 1/3], a = [1]. Điều kiện đầu mặc định bằng 0.",
    change: "Sửa b và a theo phương trình sai phân. Hệ số hồi tiếp ở vế trái đi vào a, giữ đúng dấu.",
    expected: "Đáp ứng xung bắt đầu [1/3, 1/3, 1/3, 0, …]. Đáp ứng bước bắt đầu [1/3, 2/3, 1, 1, …].",
    exercise: "Thử y[n] = 0.5*y[n−1] + x[n] bằng b = [1], a = [1, -0.5].",
    code: `import numpy as np
import matplotlib.pyplot as plt
from scipy import signal

b = [1/3, 1/3, 1/3]
a = [1]
n = np.arange(12)
impulse = np.zeros(len(n))
impulse[0] = 1
step = np.ones(len(n))

h = signal.lfilter(b, a, impulse)
s = signal.lfilter(b, a, step)

fig, axes = plt.subplots(1, 2, figsize=(10, 4))
axes[0].stem(n, h)
axes[0].set_title("Impulse response")
axes[1].stem(n, s)
axes[1].set_title("Step response")
for ax in axes:
    ax.set_xlabel("n")
    ax.grid()
plt.tight_layout()
plt.show()`
  },
  {
    id: "pho-fourier",
    title: "Từ tín hiệu sang phổ DFT",
    decks: [5, 6], chapter: 7, topic: 2,
    keywords: "Python NumPy Fourier spectrum DFT FFT rfft rfftfreq amplitude frequency bin",
    intro: "Dùng rfft cho tín hiệu thực, rfftfreq để tạo trục Hz. Mỗi bin cách nhau Fs/N Hz.",
    change: "Sửa Fs, N và công thức x. Chuẩn hóa biên độ theo N và nhân 2 cho các bin một phía ngoài DC và Nyquist.",
    expected: "Hai đỉnh ở 50 Hz và 120 Hz, có biên độ lần lượt 1 và 0,5.",
    exercise: "Đổi 50 thành 50.5 rồi quan sát rò phổ. Thêm cửa sổ Hann khi bài yêu cầu xử lý cửa sổ.",
    code: `import numpy as np
import matplotlib.pyplot as plt

Fs = 1000
N = 1000
t = np.arange(N) / Fs
x = np.cos(2*np.pi*50*t) + 0.5*np.cos(2*np.pi*120*t)

X = np.fft.rfft(x)
frequency = np.fft.rfftfreq(N, d=1/Fs)
amplitude = np.abs(X) / N
if N % 2 == 0:
    amplitude[1:-1] *= 2
else:
    amplitude[1:] *= 2

plt.plot(frequency, amplitude)
plt.xlabel("Frequency (Hz)")
plt.ylabel("Amplitude")
plt.xlim(0, 200)
plt.grid()
plt.show()`
  },
  {
    id: "fft",
    title: "Kiểm tra FFT bằng công thức DFT",
    decks: [7], chapter: 8, topic: 0,
    keywords: "Python NumPy FFT DFT twiddle factor Fourier matrix np.fft.fft allclose",
    intro: "FFT tính cùng DFT bằng thuật toán nhanh hơn. Ví dụ dùng ma trận DFT nhỏ để đối chiếu trực tiếp.",
    change: "Sửa dãy x. Ma trận dùng dấu âm trong phép biến đổi thuận, đúng quy ước np.fft.fft.",
    expected: "Cả hai cách cho [6, −2+2j, −2, −2−2j]. np.allclose trả True.",
    exercise: "Đổi x thành [1, 0, 0, 0, 0, 0, 0, 0] rồi dự đoán phổ trước khi chạy.",
    code: `import numpy as np

x = np.array([0., 1., 2., 3.])
N = len(x)
n = np.arange(N)
k = n.reshape(N, 1)
W = np.exp(-2j * np.pi * k * n / N)

X_dft = W @ x
X_fft = np.fft.fft(x)

print("DFT:", np.round(X_dft, 6))
print("FFT:", np.round(X_fft, 6))
print("Same result:", np.allclose(X_dft, X_fft))`
  },
  {
    id: "fir",
    title: "Thiết kế FIR bằng cửa sổ Hamming",
    decks: [8], chapter: 10, topic: 2,
    keywords: "Python SciPy FIR firwin freqz Hamming window lowpass filter",
    intro: "firwin tạo hệ số FIR thông thấp. Dùng fs để khai báo tần số cắt theo Hz. freqz vẽ đáp ứng tần số.",
    change: "Sửa Fs, cutoff và numtaps theo đề. numtaps là số hệ số, bậc lọc bằng numtaps − 1.",
    expected: "Bộ lọc 51 hệ số có biên độ gần 1 ở tần số thấp và giảm ở vùng trên 100 Hz.",
    exercise: "Đổi numtaps = 101 và quan sát độ rộng vùng chuyển tiếp.",
    code: `import numpy as np
import matplotlib.pyplot as plt
from scipy import signal

Fs = 1000
cutoff = 100
numtaps = 51
b = signal.firwin(numtaps, cutoff, window="hamming", fs=Fs)
frequency, H = signal.freqz(b, worN=2048, fs=Fs)

plt.plot(frequency, 20*np.log10(np.maximum(np.abs(H), 1e-12)))
plt.xlabel("Frequency (Hz)")
plt.ylabel("Magnitude (dB)")
plt.title("FIR lowpass - Hamming window")
plt.ylim(-100, 5)
plt.grid()
plt.show()`
  },
  {
    id: "iir",
    title: "Thiết kế IIR Butterworth",
    decks: [9], chapter: 10, topic: 7,
    keywords: "Python SciPy IIR Butterworth butter freqz lowpass filter",
    intro: "butter tạo bộ lọc IIR Butterworth từ bậc và tần số cắt. Khai báo fs để dùng Hz giống bài FIR.",
    change: "Sửa order, cutoff, Fs và btype theo đề.",
    expected: "Bộ thông thấp bậc 4 có biên độ tại 100 Hz khoảng −3,01 dB.",
    exercise: "Đổi order = 6 rồi so sánh độ dốc dải chắn với bậc 4.",
    code: `import numpy as np
import matplotlib.pyplot as plt
from scipy import signal

Fs = 1000
cutoff = 100
order = 4
b, a = signal.butter(order, cutoff, btype="lowpass", fs=Fs)
frequency, H = signal.freqz(b, a, worN=2048, fs=Fs)

plt.plot(frequency, 20*np.log10(np.maximum(np.abs(H), 1e-12)))
plt.xlabel("Frequency (Hz)")
plt.ylabel("Magnitude (dB)")
plt.title("IIR lowpass - Butterworth")
plt.ylim(-100, 5)
plt.grid()
plt.show()`
  }
];
