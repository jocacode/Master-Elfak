# Import PySwarms
import pyswarms as ps
import numpy as np
import matplotlib.pyplot as plt
from pyswarms.utils.functions import single_obj as fx


options = {'c1': 0.5, 'c2': 0.3, 'w': 0.9}
optimizer = ps.single.GlobalBestPSO(n_particles=10, dimensions=2, options=options)
cost, pos = optimizer.optimize(fx.sphere, iters=1000)


from pyswarms.utils.plotters import plot_contour
from pyswarms.utils.plotters.formatters import Mesher

m = Mesher(func=fx.sphere)
anim = plot_contour(pos_history=optimizer.pos_history,
                         mesher=m,
                         mark=(0, 0))

plt.show()

