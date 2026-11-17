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

struct BIT{
    int n;vector<ll>b;
    BIT(int n):n(n),b(n+1){}
    void add(int i,ll v){for(;i<=n;i+=i&-i)b[i]+=v;}
    ll sum(int i){ll s=0;for(;i>0;i-=i&-i)s+=b[i];return s;}
};
int main(){
    int n,q;cin>>n>>q;BIT ft(n);
    for(int i=1;i<=n;i++){ll x;cin>>x;ft.add(i,x);}
    while(q--){int type;cin>>type;if(type==1){int i;ll x;cin>>i>>x;ft.add(i,x);}
        else{int l,r;cin>>l>>r;cout<<ft.sum(r)-ft.sum(l-1)<<'\n';}}
}
