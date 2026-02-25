# Quantum Machine Learning Labs (PennyLane 0.44)

Quantum Machine Learning 입문 실습 자료입니다.  
PennyLane 0.44 + NumPy(autograd) 인터페이스로 작성되었으며, Google Colab 환경에서 실행할 수 있습니다.

---

## 실습 구성

### Day 1 — 양자 회로 기초

| Lab | 주제 | 핵심 내용 |
|-----|------|----------|
| **Lab 1** | 회로 생성과 실행 | QNode 생성, 회로 시각화, Shots vs Analytic 비교 |
| **Lab 2** | 양자 측정 5가지 | expval, var, probs, state, sample |
| **Lab 3** | 블로흐 구와 자동미분 | Bloch sphere, qml.grad, parameter-shift vs backprop |

### Day 2 — QML 핵심 구조

| Lab | 주제 | 핵심 내용 |
|-----|------|----------|
| **Lab 4** | Feature Map과 Ansatz | IQP / Angle 인코딩, Basic / SEL Ansatz 비교 |
| **Lab 5** | MLP 회귀 Baseline | PyTorch MLP로 y = x₁ × x₂ 학습 (고전 비교군) |
| **Lab 6** | VQR: Angle + Basic | AngleEmbedding + BasicEntanglerLayers 양자 회귀 |

### Day 3 — 고급 응용

| Lab | 주제 | 핵심 내용 |
|-----|------|----------|
| **Lab 7** | VQR: IQP + SEL | IQPEmbedding + StronglyEntanglingLayers 양자 회귀 |
| **Lab 8** | VQC: Iris 분류 | 3큐비트 멀티 출력, 결정 경계 시각화 |
| **Lab 9** | Quantum Kernel QSVC | Fidelity 커널, 커널 행렬 시각화, QSVC vs RBF SVC |

---

## 파일 구조

```
├── README.md
├── lab1_circuit_and_shots.ipynb
├── lab2_measurement_five_readouts.ipynb
├── lab3_bloch_and_autograd.ipynb
├── lab4_feature_map_and_ansatz.ipynb
├── lab5_mlp_regression_baseline.ipynb
├── lab6_vqr_angle_basic.ipynb
├── lab7_vqr_iqp_sel.ipynb
├── lab8_vqc_iris_multioutput.ipynb
├── lab9_quantum_kernel_qsvc.ipynb


---

## 실행 환경

### 필수 패키지

```bash
pip install pennylane==0.44 koreanize_matplotlib scikit-learn torch matplotlib
```

### 권장 환경

- Google Colab (CPU 런타임)
- Python 3.10+
- PennyLane 0.44+

### Colab에서 바로 실행

각 노트북 첫 셀에 설치 명령어가 포함되어 있습니다:

```python
# !pip install pennylane koreanize_matplotlib scikit-learn -q
```


---

## WikiDocs

각 Lab의 상세 설명은 `docs/` 폴더 또는 [WikiDocs 페이지]([https://wikidocs.net/](https://wikidocs.net/book/19207))에서 확인할 수 있습니다.

---

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

You are free to share and adapt this material for any purpose, including commercial use, as long as appropriate credit is given.

[![CC BY 4.0](https://licensebuttons.net/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

## Author

**이홍석 (Hongsuk Yi)**  
hsyi@kisti.re.kr  
Korea Institute of Science and Technology Information (KISTI)
