#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <queue>
#include <map>
#include <unordered_map>
#include <set>
#include <numeric>
#include <limits>
#include <tuple>
#include <array>
#include <stack>
#include <deque>
#include <cstdint>
#include <cmath>
#include <functional>
#include <iomanip>
#include <sstream>
using namespace std;
using ll = long long;

int main(){
    ios::sync_with_stdio(false); cin.tie(nullptr);
    int m,n,q;cin>>m>>n>>q;
    vector<vector<ll>> p(m+1,vector<ll>(n+1));
    for(int i=1;i<=m;i++)for(int j=1;j<=n;j++){
        ll x;cin>>x;
        p[i][j]=x+p[i-1][j]+p[i][j-1]-p[i-1][j-1];
    }
    while(q--){int a,b,c,d;cin>>a>>b>>c>>d;
        cout<<p[c][d]-p[a-1][d]-p[c][b-1]+p[a-1][b-1]<<'\n';}
}
